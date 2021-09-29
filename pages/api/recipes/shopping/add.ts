import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../functions/database';
import { RecipesModel } from '../../../../types/database/RecipesType';

const shoppingAdd = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: {
        id: '3R107/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { member_id, list } = req.body;

  if (!member_id || !list) {
    return res.status(400).json({
      error: {
        id: '3R107/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5R107/1'
      }
    });
  }
};

export default shoppingAdd;
