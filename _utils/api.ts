export const apiURL = `${
  process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.NEXTAUTH_URL
}/api`;
