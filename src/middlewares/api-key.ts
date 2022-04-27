import { API_KEY, RESPONSE_MESSAGES } from '../configuration';

const { internalServerError } = RESPONSE_MESSAGES;

export default async function apiKey(req, res, next) {
  try {
    const { headers: { apikey = '' } = {} } = req;

    if (!apikey || apikey !== API_KEY) {
      return res.status(403).sendFile('public/403.html', { root: process.cwd() });
    }

    return next();
  } catch (error: Error | unknown) {
    return res.status(500).send(internalServerError);
  }
}
