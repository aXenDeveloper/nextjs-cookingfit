import { NextApiRequest, NextApiResponse } from 'next';
import { authenticated } from '../../functions/authenticated';
import { query } from '../../functions/database';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const results: any = await query('SELECT * FROM core_members');

    return res.status(200).json({ results });
  } catch (e) {
    // @ts-ignore
    return res.status(500).json({ message: e.message });
  }
};

export default authenticated(hello);
