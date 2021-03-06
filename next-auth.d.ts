import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      name: string;
      name_seo: string;
      email: string;
      group_id: number;
    };
  }
}
