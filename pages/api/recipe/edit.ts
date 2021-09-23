import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import slugify from 'slugify';
import { ServerResponse } from 'http';
import { query } from '../../../functions/database';
import { authenticated } from '../../../functions/authenticated';
import { IngredientsProps } from '../../../types/database/RecipesType';
import image from 'next/image';

interface ServerResponseProps extends ServerResponse {
  status: (statusCode: number) => NextApiResponse<any>;
}

const currentDate = new Date();

const upload = multer({
  storage: multer.diskStorage({
    destination: `./public/uploads/monthly_${currentDate.getMonth()}_${currentDate.getFullYear()}`,
    filename: (req, file, cb) => cb(null, `${currentDate.getTime()}_${file.originalname}`)
  })
});

const recipeEdit = nextConnect<NextApiRequest, ServerResponseProps>({
  onError(error, req, res) {
    return res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    return res.status(405).json({
      error: {
        id: '3C107/2',
        message: 'INVALID_QUERY'
      }
    });
  }
});

recipeEdit.use(upload.array('image'));

recipeEdit.post(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: {
        id: '3C107/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const {
    title,
    text,
    time,
    category_id,
    author_id,
    difficulty,
    calories,
    proteins,
    fats,
    carbohydrates,
    ingredients,
    serveCount,
    id,
    image_URL
  } = req.body;

  if (
    !title ||
    !text ||
    !time ||
    !category_id ||
    !author_id ||
    !difficulty ||
    !calories ||
    !proteins ||
    !fats ||
    !carbohydrates ||
    !id
  ) {
    return res.status(400).json({
      error: {
        id: '3C107/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  const url = slugify(title as string).toLowerCase();

  try {
    const existCategory = (await query(
      'SELECT category_name FROM recipes_categories WHERE category_id=?',
      [+category_id]
    )) as {
      category_name: string;
    }[];

    if (existCategory.length === 0) {
      return res.status(400).json({
        error: {
          id: '3C107/6',
          message: 'INVALID_CATEGORY'
        }
      });
    }

    const currentIngredients: IngredientsProps[] = ingredients ? JSON.parse(ingredients) : null;

    const result = await query(
      'UPDATE recipes_recipes SET title=?, url=?, text=?, time=?, category_id=?, author_id=?, publish_date=?, difficulty=?, image=?, calories=?, proteins=?, fats=?, carbohydrates=?, ingredients=?, serve_count=? WHERE id=?',
      [
        title as string,
        url,
        text as string,
        +time,
        +category_id,
        +author_id,
        currentDate.getTime() / 1000,
        +difficulty,
        // @ts-ignore
        req.files[0]
          ? `/uploads/monthly_${currentDate.getMonth()}_${currentDate.getFullYear()}/${
              // @ts-ignore
              req.files[0].filename
            }`
          : image_URL,
        +calories,
        +proteins,
        +fats,
        +carbohydrates,
        currentIngredients
          ? JSON.stringify(
              currentIngredients.filter(el => (el.quantity = el.quantity / serveCount))
            )
          : null,
        +serveCount,
        +id
      ]
    );

    return res.status(200).json({
      result,
      recordURL: `${existCategory[0].category_name}/${url}-${id}`,
      // @ts-ignore
      url: req.files[0]
        ? `/uploads/monthly_${currentDate.getMonth()}_${currentDate.getFullYear()}/${
            // @ts-ignore
            req.files[0].filename
          }`
        : null
    });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C107/1'
      }
    });
  }
});

export default authenticated(recipeEdit);

export const config = {
  api: {
    bodyParser: false
  }
};
