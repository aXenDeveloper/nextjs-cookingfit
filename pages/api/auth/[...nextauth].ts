import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Session } from 'next-auth';
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

          if (existUser.length === 0) {
            return null;
          }

          const validPassword = await compare(password, existUser[0].password);
          if (existUser.length === 0 || !validPassword) {
            return null;
          }

          return {
            id: existUser[0].id,
            email: existUser[0].email
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
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
  },
  callbacks: {
    async session(session: Session, token: { accessToken: string; sub: number }) {
      const existUser = (await query(
        'SELECT id, name, name_seo, email, group_id FROM core_members WHERE id=?',
        [token.sub]
      )) as {
        id: number;
        name: string;
        name_seo: string;
        email: string;
        group_id: number;
      }[];

      if (existUser.length === 0) {
        return session;
      }

      const encodedToken = sign(token, process.env.CSRF_KEY!);

      session.token = encodedToken;
      session.accessToken = token.accessToken;
      session.user.id = existUser[0].id;
      session.user.name = existUser[0].name;
      session.user.group_id = existUser[0].group_id;
      session.user.name_seo = existUser[0].name_seo;

      return session;
    }
  },
  debug: true
};

const NextAuthAPI = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export default NextAuthAPI;
