import { API_KEY, RESPONSE_MESSAGES } from '../configuration';

const { internalServerError, forbidden } = RESPONSE_MESSAGES;

export default async function apiKey(req, res, next) {
  try {
    const { headers: { apikey = '' } = {} } = req;

    if (!apikey || apikey !== API_KEY) {
      return res.status(403).send(forbidden);
    }

    return next();
  } catch (error: Error | unknown) {
    return res.status(500).send(internalServerError);
  }
}
