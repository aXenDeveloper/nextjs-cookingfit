import NextAuth from 'next-auth';

declare module 'next-auth' {
  type Session = {
    user: {
      id: number;
      member_name: string;
      member_email: string;
      member_group_id: number;
    };
  };
}
