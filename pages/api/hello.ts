import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../lib/database';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results: any = await query(`SELECT * FROM products`);

    return res.json(results);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
