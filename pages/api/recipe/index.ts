import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';
import { RecipeModel } from '../../../types/database/RecipesType';

const recipe = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: {
        id: '3R102/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { category, id, url } = req.query;

  if (!category || !id) {
    return res.status(400).json({
      error: {
        id: '3R102/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
    const result = (await query(
      `SELECT

      recipes_recipes.id,
      recipes_recipes.title,
      recipes_recipes.publish_date,
      recipes_recipes.difficulty,
      recipes_recipes.time,
      recipes_recipes.text,
      recipes_categories.id AS category_id,
      recipes_categories.name AS category_name,
      recipes_recipes.image,
      core_members.id AS member_id,
      core_members.name AS member_name,
      core_members.name_seo AS member_name_seo,
      recipes_recipes.calories,
      recipes_recipes.proteins,
      recipes_recipes.fats,
      recipes_recipes.carbohydrates,
      recipes_recipes.ingredients,
      recipes_recipes.serve_count

      FROM recipes_recipes
      INNER JOIN recipes_categories ON recipes_categories.id=recipes_recipes.category_id INNER JOIN core_members ON recipes_recipes.author_id=core_members.id
      WHERE recipes_recipes.id=? AND recipes_categories.name=? AND recipes_recipes.url=?
      `,
      [+id as number, category as string, url as string]
    )) as RecipeModel[];

    if (result.length === 0) {
      return res.status(404).json({
        error: {
          id: '1R102/4',
          message: 'NOT_FOUND'
        }
      });
    }

    return res.status(200).json({ result });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5R102/1'
      }
    });
  }
};

export default recipe;
