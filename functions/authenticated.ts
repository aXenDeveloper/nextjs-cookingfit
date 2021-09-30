import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export const authenticated =
  (fn: NextApiHandler, errorCode404 = '2C100/2') =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session || !session?.user) {
      return res.status(401).json({
        error: {
          id: errorCode404,
          message: 'ACCESS_DENIED'
        }
      });
    }

    if (session.user.group_id === 2) {
      return res.status(401).json({
        error: {
          id: '2C100/4',
          message: 'BANNED_USER'
        }
      });
    }

    try {
      return await fn(req, res);
    } catch (err) {
      return res.status(500).json({
        error: {
          id: '5C100/1'
        }
      });
    }
  };
