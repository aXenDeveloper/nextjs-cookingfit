import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { authenticated } from '../../functions/authenticated';
import { query } from '../../functions/database';

const hello = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    verify(req.headers.csrf! as string, process.env.CSRF_KEY!, async (err, decoded) => {
      const results: any = await query('SELECT * FROM core_members');

      return res.status(200).json({ results, decoded });
    });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export default authenticated(hello);
