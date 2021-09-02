import { compare } from 'bcrypt';
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
            'SELECT id, member_email, member_password FROM core_members WHERE member_email=?',
            [email]
          )) as {
            id: number;
            member_email: string;
            member_password: string;
          }[];

          if (existUser.length === 0) {
            return null;
          }

          const validPassword = await compare(password, existUser[0].member_password);
          if (existUser.length === 0 || !validPassword) {
            return null;
          }

          return {
            id: existUser[0].id,
            email: existUser[0].member_email
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
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  },
  callbacks: {
    async session(session: Session, token: { accessToken: string; sub: number }) {
      const existUser = (await query(
        'SELECT id, member_name, member_email, member_group_id FROM core_members WHERE id=?',
        [token.sub]
      )) as {
        id: number;
        member_name: string;
        member_email: string;
        member_group_id: number;
      }[];

      if (existUser.length === 0) {
        return session;
      }

      session.accessToken = token.accessToken;
      session.user.id = existUser[0].id;
      session.user.member_name = existUser[0].member_name;
      session.user.member_group_id = existUser[0].member_group_id;

      return session;
    }
  },
  debug: true
};

const NextAuthAPI = (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);

export default NextAuthAPI;
