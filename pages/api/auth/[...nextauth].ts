import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Custom Provider',
      credentials: {
        username: { label: 'Email', type: 'text', placeholder: 'test@test.pl' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { name: 'Test', email: 'test@test.pl' };
        return user;
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

const NextAuthAPI = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default NextAuthAPI;
