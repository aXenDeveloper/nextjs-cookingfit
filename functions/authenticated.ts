import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import { query } from './database';

export const authenticated =
  (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (!process.env.CSRF_KEY) {
      return res.status(400).json({
        error: {
          id: '2C100/5',
          message: 'EMPTY_CSRF_KEY'
        }
      });
    }

    if (req.method !== 'GET') {
      return res.status(400).json({
        error: {
          id: '3C100/2',
          message: 'INVALID_METHOD'
        }
      });
    }

    if (!req.headers.csrf) {
      return res.status(400).json({
        error: {
          id: '3C100/3',
          message: 'EMPTY_CSRF'
        }
      });
    }

    const data = {
      csrf: req.headers.csrf as string
    };

    try {
      verify(data.csrf, process.env.CSRF_KEY, async (err, decoded) => {
        if (err || !decoded) {
          return res.status(401).json({
            error: {
              id: '2C100/4',
              message: 'INVALID_CSRF'
            }
          });
        }

        const existUser = (await query(
          'SELECT id, email, group_id FROM core_members WHERE id=? AND email=?',
          [decoded.id, decoded.email]
        )) as {
          id: number;
          email: string;
          group_id: number;
        }[];

        if (existUser.length === 0) {
          return res.status(401).json({
            error: {
              id: '2C100/4',
              message: 'INVALID_CSRF'
            }
          });
        }

        if (existUser[0].group_id === 2) {
          return res.status(401).json({
            error: {
              id: '2C100/6',
              message: 'BANNED_USER'
            }
          });
        }

        return await fn(req, res);
      });
    } catch (err) {
      return res.status(500).json({
        error: {
          id: '5C100/1',
          message: process.env.DEBUG_API ? err : null
        }
      });
    }
  };
