import mysql from 'serverless-mysql';

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT!)
  }
});

export const query = async (
  q: string,
  values: (string | number | null)[] | string | number | null = []
) => {
  try {
    const results = await db.query(q, values);
    await db.end();

    return results;
  } catch (e) {
    // @ts-ignore
    throw Error(e.message);
  }
};
