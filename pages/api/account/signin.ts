import { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';

import { query } from '../../../functions/database';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C101/2',
        message: 'INVALID_METHOD'
      }
    });
  }

  const data = {
    email: req.body.email,
    password: req.body.password
  };

  if (!data.email || !data.password) {
    return res.status(403).json({
      error: {
        id: '2C101/3',
        message: 'INVALID_DATA',
        data: process.env.API_DEBUG ? data : null
      }
    });
  }

  try {
    const existMember = (await query('SELECT email, password FROM core_members WHERE email=?', [
      data.email
    ])) as {
      email: string;
      password: string;
    }[];

    if (!existMember[0]) {
      return res.status(401).json({
        error: {
          id: '2C101/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.API_DEBUG ? existMember : null
        }
      });
    }

    const validPassword = await compare(data.password, existMember[0].password);

    if (existMember.length === 0 || !validPassword) {
      return res.status(401).json({
        error: {
          id: '2C101/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.API_DEBUG ? existMember : null
        }
      });
    }

    return res.status(200).json({ email: data.email });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C101/1',
        message: process.env.API_DEBUG ? e.message : null
      }
    });
  }
};

export default signin;
