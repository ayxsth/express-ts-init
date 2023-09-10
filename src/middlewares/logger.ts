import { NextFunction, Request, Response } from 'express';

import { createLogger } from '@/utils/logger';

const log = createLogger('request');

function getLog(method: string, originalUrl: string, statusCode: number, timeTaken: number, contentLength?: string) {
  const baseLog = `[${method}] ${originalUrl} Status: ${statusCode} CPU Time: ${timeTaken}ms Content Length: ${contentLength}`;

  return baseLog;
}

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const { method, originalUrl } = req;

  const startTime = Date.now();

  res.on('finish', () => {
    const { statusCode } = res;

    const contentLength = res.get('content-length');

    const timeTaken = Date.now() - startTime;

    const logText = getLog(method, originalUrl, statusCode, timeTaken, contentLength);

    log.info(logText);
  });

  next();
}
