import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated } from '../../../../functions/authenticated';
import { query } from '../../../../functions/database';

const shoppingEdit = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: {
        id: '3S107/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { member_id, list } = req.body;

  if (!member_id || !list) {
    return res.status(400).json({
      error: {
        id: '3S107/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
    const addList = await query(`INSERT INTO recipes_shopping (member_id, list) VALUES (?, ?)`, [
      +member_id,
      list
    ]);

    return res.status(200).json(addList);
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5S107/1'
      }
    });
  }
};

export default authenticated(shoppingEdit, '1S107/4');
