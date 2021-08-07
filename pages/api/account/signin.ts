import { NextApiRequest, NextApiResponse } from 'next';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { query } from '../../../functions/database';
import { emailRegex } from '../../../_utils/regex';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.CSRF_KEY) {
    return res.status(400).json({
      error: {
        id: '2C102/5',
        message: 'EMPTY_CSRF_KEY',
      },
    });
  }

  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C102/2',
        message: 'INVALID_METHOD',
      },
    });
  }

  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  const { email, password } = data;

  if (!email || !password || !emailRegex.test(email)) {
    return res.status(403).json({
      error: {
        id: '2C102/3',
        message: 'INVALID_DATA',
        data: process.env.DEBUG_API ? data : null,
      },
    });
  }

  try {
    const existUser = (await query(
      'SELECT id, email, password FROM core_members WHERE email=?',
      [email],
    )) as {
      id: number;
      email: string;
      password: string;
    }[];

    if (!existUser[0]) {
      return res.status(401).json({
        error: {
          id: '2C102/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.DEBUG_API ? existUser : null,
        },
      });
    }

    const validPassword = await compare(password, existUser[0].password);

    if (existUser.length === 0 || !validPassword) {
      return res.status(401).json({
        error: {
          id: '2C102/4',
          message: 'INVALID_EMAIL_OR_PASSWORD',
          data: process.env.DEBUG_API ? existUser : null,
        },
      });
    }

    const token = sign(
      { id: existUser[0].id, email: existUser[0].email },
      process.env.CSRF_KEY,
      {
        expiresIn: 604800, // 7 days
      },
    );

    return res.status(200).json({ email, csrf: token });
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C102/1',
        message: process.env.DEBUG_API ? e.message : null,
      },
    });
  }
};

export default signin;
