import { NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import multer from 'multer';
import { IncomingMessage, ServerResponse } from 'http';

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
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
});

apiRoute.use(upload.array('upload'));

apiRoute.post((req, res) => {
  res.status(200).json({
    uploaded: true,
    url: `/uploads/monthly_${date.getMonth()}_${date.getFullYear()}/${req.files[0].filename}`
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false
  }
};
