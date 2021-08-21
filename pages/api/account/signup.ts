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
    password: req.body.password
  };
  const { name, email, password } = data;

  if (!name || !email || !password || !emailRegex.test(email)) {
    return res.status(403).json({
      error: {
        id: '2C101/3',
        message: 'INVALID_DATA'
      }
    });
  }

  try {
    const existUser = (await query('SELECT name, email FROM core_members WHERE email=? OR name=?', [
      email,
      name
    ])) as {
      name: number;
      email: string;
    }[];

    if (existUser[0]?.email === email) {
      return res.status(403).json({
        error: {
          id: '1C101/4',
          message: 'EXIST_USER_EMAIL'
        }
      });
    }

    if (existUser[0]?.name === name) {
      return res.status(403).json({
        error: {
          id: '1C101/6',
          message: 'EXIST_USER_NAME'
        }
      });
    }

    const hashedPassword = await hash(password, 16);

    const results = await query(
      'INSERT INTO core_members (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    return res.status(200).json(results);
  } catch (e) {
    return res.status(500).json({
      error: {
        id: '5C101/1'
      }
    });
  }
};

export default signup;
