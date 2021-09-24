import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export const authenticated =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({
        error: {
          id: '2C100/2',
          message: 'INVALID_SESSION'
        }
      });
    }

    try {
      if (!session?.user) {
        return res.status(401).json({
          error: {
            id: '2C100/3',
            message: 'INVALID_SESSION'
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

      return await fn(req, res);
    } catch (err) {
      return res.status(500).json({
        error: {
          id: '5C100/1'
        }
      });
    }
  };
