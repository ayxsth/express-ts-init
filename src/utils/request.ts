import { Request } from 'express';

export function parseDatesInBody(req: Request) {
  const { body } = req;

  const isoDateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?)?Z?$/;

  if (typeof body === 'object') {
    Object.entries(body).forEach(([key, value]) => {
      if (typeof value === 'string' && isoDateRegex.test(value)) {
        body[key] = new Date(value);
      }
    });
  }

  return body;
}
