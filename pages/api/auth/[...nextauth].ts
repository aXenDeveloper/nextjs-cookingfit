import { compare } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query } from '../../../functions/database';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Custom Provider',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          const existUser = (await query(
            'SELECT id, email, password FROM core_members WHERE email=?',
            [email]
          )) as {
            id: number;
            email: string;
            password: string;
          }[];

          if (!existUser[0]) {
            return null;
          }

          const validPassword = await compare(password, existUser[0].password);
          if (existUser.length === 0 || !validPassword) {
            return null;
          }

          return {
            email
          };
        } catch {
          return null;
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  jwt: {
    secret: process.env.CSRF_KEY
  }
};

const NextAuthAPI = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export default NextAuthAPI;
