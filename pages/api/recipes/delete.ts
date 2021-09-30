import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated } from '../../../functions/authenticated';
import { query } from '../../../functions/database';

const recipeDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: {
        id: '3R106/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: {
        id: '3R106/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
    const result = await query('DELETE FROM recipes_recipes WHERE id=?', [+id as number]);

    return res.status(200).json({ result });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5R106/1'
      }
    });
  }
};

export default authenticated(recipeDelete, '1R106/4');
