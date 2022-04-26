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

server.use(apiKey);

server.get('/', (_, res) => {
  res.status(200).send('Hello, World!');
});

export default server;
