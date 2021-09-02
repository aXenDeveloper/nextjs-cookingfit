import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';
import { RecipeModel } from '../../../types/database/RecipesType';

const recipes = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(400).json({
      error: {
        id: '3C103/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  try {
    const page = +req.query.page;
    const limit = +req.query.limit || 1;
    const offset = (page - 1) * limit;

    const countRecords = (await query(`SELECT COUNT(*) FROM recipes_recipes`)) as [{}];
    const lengthRecords = Object.values(countRecords[0])[0] as number;

    const results = (await query(
      `SELECT

      recipes_recipes.id,
      recipes_recipes.title,
      recipes_recipes.publish_date,
      recipes_recipes.difficulty,
      recipes_categories.category_name,
      recipes_recipes.image,
      core_members.member_name,
      core_members.member_name_seo

      FROM recipes_recipes
      INNER JOIN recipes_categories ON recipes_categories.id=recipes_recipes.category_id INNER JOIN core_members ON recipes_recipes.author_id=core_members.id
      ORDER BY recipes_recipes.id ASC
      LIMIT ${limit} OFFSET ${offset}`
    )) as RecipeModel[];

    return res.status(200).json({ next: page * limit < lengthRecords, results });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C103/1'
      }
    });
  }
};

export default recipes;
