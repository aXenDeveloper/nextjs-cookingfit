import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../functions/database';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C100/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  if (
    !data.name ||
    !data.email ||
    !data.password ||
    !data.confirmPassword ||
    data.password !== data.confirmPassword
  ) {
    return res.status(403).json({
      error: {
        id: '1C100/3',
        message: 'INVALID_DATA',
        data: process.env.API_DEBUG ? data : null
      }
    });
  }

  try {
    const existMember = (await query(
      'SELECT name, email FROM core_members WHERE email=? OR name=?',
      [data.email, data.name]
    )) as [];

    if (existMember.length !== 0) {
      return res.status(403).json({
        error: {
          id: '1C100/4',
          message: 'EXIST_USER',
          data: process.env.API_DEBUG ? existMember : null
        }
      });
    }

    const results = await query(
      'INSERT INTO core_members (name, email, password) VALUES (?, ?, ?)',
      [data.name, data.email, data.password]
    );

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C100/1',
        message: e.message
      }
    });
  }
};

export default signup;
