import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';

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
    const results = await query(`SELECT * FROM recipes_recipes`);

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
