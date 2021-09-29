import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import { IncomingMessage, ServerResponse } from 'http';
import { authenticated } from '../../../functions/authenticated';

interface ServerResponseProps extends ServerResponse {
  status: (statusCode: number) => NextApiResponse<any>;
}

interface IncomingMessageProps extends IncomingMessage {
  files: {
    filename: string;
  }[];
}

const date = new Date();

const upload = multer({
  storage: multer.diskStorage({
    destination: `./public/uploads/monthly_${date.getMonth()}_${date.getFullYear()}`,
    filename: (req, file, cb) => cb(null, `${date.getTime()}_${file.originalname}`)
  })
});

const apiRoute = nextConnect<IncomingMessageProps, ServerResponseProps>({
  onError(error, req, res) {
    return res.status(500).json({
      error: {
        id: '5R104/1'
      }
    });
  },
  onNoMatch(req, res) {
    return res.status(405).json({
      error: {
        id: '3R104/2',
        message: 'INVALID_QUERY'
      }
    });
  }
});

apiRoute.use(upload.array('upload'));

apiRoute.post((req, res) => {
  res.status(200).json({
    uploaded: true,
    url: `/uploads/monthly_${date.getMonth()}_${date.getFullYear()}/${req.files[0].filename}`
  });
});

// @ts-ignore
export default authenticated(apiRoute);

export const config = {
  api: {
    bodyParser: false
  }
};
