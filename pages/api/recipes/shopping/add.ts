import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated } from '../../../../functions/authenticated';
import { query } from '../../../../functions/database';

const shoppingAdd = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: {
        id: '3R107/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const { member_id, unit, name } = req.body;

  if (!member_id || !name) {
    return res.status(400).json({
      error: {
        id: '3R107/3',
        message: 'INVALID_QUERY'
      }
    });
  }

  try {
    const addList = await query(
      `INSERT INTO recipes_shopping

      (member_id, name ${unit ? ', unit' : ''})

      VALUES (?, ?${unit ? ', ?' : ''})`,
      [+member_id, name, unit]
    );

    return res.status(200).json(addList);
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5R107/1'
      }
    });
  }
};

export default authenticated(shoppingAdd, '1R107/4');
