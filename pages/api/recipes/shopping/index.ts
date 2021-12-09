import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { query } from '../../../../functions/database';
import { ShoppingListProps } from '../../../../types/database/ShoppingType';

const shoppingIndex = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: {
        id: '3S108/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { member_id } = req.query;

  if (!member_id) {
    return res.status(400).json({
      error: {
        id: '3S108/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
    const session = await getSession({ req });
    if (session?.user.id !== +member_id && session?.user.group_id !== 4) {
      return res.status(403).json({
        error: {
          id: '1S108/4',
          message: 'ACCESS_DENIED'
        }
      });
    }

    const results = (await query(
      `SELECT id, member_id, list
      FROM recipes_shopping
      WHERE member_id=${+member_id}
      ORDER BY id DESC`
    )) as ShoppingListProps[];

    return res.status(200).json({
      results: results[0]
    });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5S108/1'
      }
    });
  }
};

export default shoppingIndex;
