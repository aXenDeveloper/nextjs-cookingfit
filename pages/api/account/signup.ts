import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';

import { query } from '../../../functions/database';
import { emailRegex } from '../../../_utils/regex';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).json({
      error: {
        id: '3C101/2',
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

  // TODO: Add email and password regex

  if (
    !data.name ||
    !data.email ||
    !data.password ||
    !data.confirmPassword ||
    data.password !== data.confirmPassword ||
    !emailRegex.test(data.email)
  ) {
    return res.status(403).json({
      error: {
        id: '2C101/3',
        message: 'INVALID_DATA',
        data: process.env.DEBUG_API ? data : null
      }
    });
  }

  try {
    const existUser = (await query('SELECT name, email FROM core_members WHERE email=? OR name=?', [
      data.email,
      data.name
    ])) as [];

    if (existUser.length !== 0) {
      return res.status(403).json({
        error: {
          id: '1C101/4',
          message: 'EXIST_USER',
          data: process.env.DEBUG_API ? existUser : null
        }
      });
    }

    const hashedPassword = await hash(data.password, 16);

    const results = await query(
      'INSERT INTO core_members (name, email, password) VALUES (?, ?, ?)',
      [data.name, data.email, hashedPassword]
    );

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C101/1',
        message: process.env.DEBUG_API ? e.message : null
      }
    });
  }
};

export default signup;
