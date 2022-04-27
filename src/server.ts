import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { apiKey } from './middlewares';

const server = express();

server.use(helmet());
server.disable('x-powered-by');
server.use(bodyParser.json());
server.use(cors());

server.get('/', (_, res) => {
  res.status(200).sendFile('src/public/index.html', { root: process.cwd() });
});

server.use(apiKey);

export default server;
