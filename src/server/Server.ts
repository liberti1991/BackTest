import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';
import morganBody from 'morgan-body';
import path from 'path';
import { router } from './routes';


const server = express();

server.use(bodyParser.json());
server.use(router);

const log = fs.createWriteStream(path.join(__dirname, './logs', 'express.log'), { flags: 'a' });

morganBody(server, {
  noColors: true,
  stream: log,
});

export { server };


