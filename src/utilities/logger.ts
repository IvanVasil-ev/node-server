import { Console } from 'console';

export const logger = ({ message = '', status = 'log' }) => {
  return new Console(process.stdout, process.stderr)[status](message);
};
