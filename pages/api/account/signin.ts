import { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { query } from '../../../functions/database';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.CSRF_KEY) {
    return res.status(400).json({
      error: {
        id: '2C101/5',
        message: 'EMPTY_CSRF_KEY'
      }
    });
  }

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
        data: process.env.DEBUG_API ? data : null
      }
    });
  }

  try {
    const existMember = (await query('SELECT id, email, password FROM core_members WHERE email=?', [
      data.email
    ])) as {
      id: number;
      email: string;
      password: string;
    }[];

    if (!existMember[0]) {
      return res.status(401).json({
        error: {
          id: '2C101/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.DEBUG_API ? existMember : null
        }
      });
    }

    const validPassword = await compare(data.password, existMember[0].password);

    if (existMember.length === 0 || !validPassword) {
      return res.status(401).json({
        error: {
          id: '2C101/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.DEBUG_API ? existMember : null
        }
      });
    }

    const token = sign({ sub: existMember[0].id }, process.env.CSRF_KEY);

    return res.status(200).json({ email: data.email, csrf: token });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C101/1',
        message: process.env.DEBUG_API ? e.message : null
      }
    });
  }
};

export default signin;
