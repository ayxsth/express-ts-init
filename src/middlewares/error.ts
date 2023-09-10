import { HttpStatusCode } from 'axios';
import { NextFunction, Request, Response } from 'express';

import { ENDPOINT_NOT_FOUND } from '@constants/error';

import { buildError } from '@utils/error';
import { createLogger } from '@utils/logger';

const logger = createLogger('error');

export function genericErrorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err.stack) {
    logger.error(err.stack);
  }

  const error = buildError(err);

  res.status(error.code).json({ error });
}

export function endpointNotFoundError(_req: Request, res: Response) {
  res.status(HttpStatusCode.NotFound).json({
    error: {
      code: HttpStatusCode.NotFound,
      message: ENDPOINT_NOT_FOUND
    }
  });
}
