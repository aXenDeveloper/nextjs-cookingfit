import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';
import { RecipesModel } from '../../../types/database/RecipesType';

const recipes = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: {
        id: '3R101/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const page = +req.query.page <= 0 ? 0 : +req.query.page;
  const limit = +req.query.limit || 10;
  const offset = (page - 1) * limit;
  const where = req.query.category;

  try {
    const countRecords = (await query(
      `SELECT COUNT(*) FROM recipes_recipes INNER JOIN recipes_categories ON recipes_categories.id=recipes_recipes.category_id${
        where ? ` WHERE recipes_categories.name='${where}'` : ''
      }`
    )) as [{}];
    const lengthRecords = Object.values(countRecords[0])[0] as number;

    const results = (await query(
      `SELECT

      recipes_recipes.id,
      recipes_recipes.title,
      recipes_recipes.url,
      recipes_recipes.publish_date,
      recipes_recipes.difficulty,
      recipes_recipes.time,
      recipes_recipes.text,
      recipes_categories.name AS category_name,
      recipes_recipes.image,
      core_members.name AS member_name,
      core_members.name_seo AS member_name_seo

      FROM recipes_recipes
      INNER JOIN recipes_categories ON recipes_categories.id=recipes_recipes.category_id INNER JOIN core_members ON recipes_recipes.author_id=core_members.id
      ${where ? `WHERE recipes_categories.name='${where}'` : ''}
      ORDER BY recipes_recipes.publish_date DESC
      LIMIT ${limit} OFFSET ${offset}`
    )) as RecipesModel[];

    return res.status(200).json({
      page: {
        max: Math.round(lengthRecords / limit)
      },
      results
    });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5R101/1'
      }
    });
  }
};

export default recipes;
