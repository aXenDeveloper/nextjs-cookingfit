import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import { query } from '../../../functions/database';

const recipeAdd = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C105/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { title, text, time, category_id, author_id, date } = req.body;

  if (!title || !text || !time || !category_id || !author_id || !date) {
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
      'INSERT INTO recipes_recipes (title, url, text, time, category_id, author_id, publish_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title as string, url, text as string, +time, +category_id, +author_id, +date]
    );

    return res.status(200).json({ result, url: `${existCategory[0].category_name}/${url}` });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C105/1',
        e: e.message
      }
    });
  }
};

export default recipeAdd;
