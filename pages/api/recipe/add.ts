import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import slugify from 'slugify';
import { IncomingMessage, ServerResponse } from 'http';
import { query } from '../../../functions/database';
import { authenticated } from '../../../functions/authenticated';

interface ServerResponseProps extends ServerResponse {
  status: (statusCode: number) => NextApiResponse<any>;
}

interface IncomingMessageProps extends IncomingMessage {
  files: {
    filename: string;
  }[];
  body: {
    title: string;
    text: string;
    time: number;
    category_id: number;
    author_id: number;
    date: number;
    difficulty: number;
    image: {
      filename: string;
    }[];
  };
}

const currentDate = new Date();

const upload = multer({
  storage: multer.diskStorage({
    destination: `./public/uploads/monthly_${currentDate.getMonth()}_${currentDate.getFullYear()}`,
    filename: (req, file, cb) => cb(null, `${currentDate.getTime()}_${file.originalname}`)
  })
});

const recipeAdd = nextConnect<NextApiRequest, ServerResponseProps>({
  onError(error, req, res) {
    return res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    return res.status(405).json({
      error: {
        id: '3C105/2',
        message: 'INVALID_QUERY'
      }
    });
  }
});

recipeAdd.use(upload.array('image'));

recipeAdd.post(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C105/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { title, text, time, category_id, author_id, difficulty } = req.body;

  if (!title || !text || !time || !category_id || !author_id || !difficulty) {
    return res.status(400).json({
      error: {
        id: '3C105/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  const url = slugify(title as string).toLowerCase();

  try {
    const existUser = (await query('SELECT id, member_group_id FROM core_members WHERE id=?', [
      +author_id
    ])) as {
      id: number;
      member_group_id: number;
    }[];

    if (existUser.length === 0) {
      return res.status(401).json({
        error: {
          id: '2C105/4',
          message: 'INVALID_USER'
        }
      });
    }

    if (existUser[0].member_group_id === 2) {
      return res.status(401).json({
        error: {
          id: '2C105/5',
          message: 'BANNED_USER'
        }
      });
    }

    const existUrl = (await query('SELECT url FROM recipes_recipes WHERE url=?', [url])) as {
      url: string;
    }[];

    if (existUrl.length !== 0) {
      return res.status(401).json({
        error: {
          id: '1C105/7',
          message: 'EXIST_TITLE'
        }
      });
    }

    const existCategory = (await query('SELECT category_name FROM recipes_categories WHERE id=?', [
      +category_id
    ])) as {
      category_name: string;
    }[];

    if (existCategory.length === 0) {
      return res.status(400).json({
        error: {
          id: '3C105/6',
          message: 'INVALID_CATEGORY'
        }
      });
    }

    const result = await query(
      'INSERT INTO recipes_recipes (title, url, text, time, category_id, author_id, publish_date, difficulty, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        title as string,
        url,
        text as string,
        +time,
        +category_id,
        +author_id,
        currentDate.getTime(),
        +difficulty,
        // @ts-ignore
        req.files[0]
          ? `/uploads/monthly_${currentDate.getMonth()}_${currentDate.getFullYear()}/${
              // @ts-ignore
              req.files[0].filename
            }`
          : null
      ]
    );

    return res.status(200).json({
      result,
      recordURL: `${existCategory[0].category_name}/${url}`,
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
        id: '5C105/1'
      }
    });
  }
});

export default authenticated(recipeAdd);

export const config = {
  api: {
    bodyParser: false
  }
};
