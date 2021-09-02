import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';
import { RecipeModel } from '../../../types/database/RecipesType';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(400).json({
      error: {
        id: '3C103/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  try {
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
      INNER JOIN recipes_categories ON recipes_categories.id=recipes_recipes.category_id INNER JOIN core_members ON recipes_recipes.author_id=core_members.id`
    )) as RecipeModel[];

    return res.status(200).json({ results });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C103/1'
      }
    });
  }
};

export default hello;
