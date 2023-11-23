// import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import moment from 'moment';
import morganBody from 'morgan-body';
import path from 'path';
import { router } from './routes';


const server = express();
server.use(express.json());

const log = fs.createWriteStream(path.join(__dirname, './logs', `${moment().format('YYYY-MM-DD')}.log`), { flags: 'a' });
morganBody(server, {
  noColors: true,
  logAllReqHeader: true,
  logAllResHeader: true,
  stream: log,
});

server.use(router);

export { server };


