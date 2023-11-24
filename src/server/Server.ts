import express, { Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { router } from './routes';


const app = express();

app.use(helmet());
app.use(express.json());

morgan.token('type', function (req: Request, res: Response) {
  return req.headers['content-type'];
});

morgan.token('req-body', function (req: Request, res: Response) {
  return JSON.stringify(req.body);
});

// Crie um array para armazenar os logs em vez de escrevê-los em um arquivo
app.use(morgan((tokens, req: Request, res: Response) => {
  console.log(tokens);

  const logEntry = {
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: tokens.status(req, res),
    contentLength: tokens.res(req, res, 'content-length'),
    responseTime: tokens['response-time'](req, res),
    date: tokens.date(req, res, 'web'),
    type: tokens.type(req, res),
    reqBody: tokens['req-body'](req, res),
  };

  console.log(logEntry);



  return null; // Este retorno nulo impede que o morgan envie os logs para o stream padrão
}));

app.use(router);


export { app };

