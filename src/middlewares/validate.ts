import { ZodError, ZodSchema } from 'zod';
import { NextFunction, Request, Response } from 'express';

import ValidationError from '@errors/validation';

import { parseDatesInBody } from '@/utils/request';
import { getFormattedZodError } from '@utils/error';

export function validate<T>(schema: ZodSchema<T>) {
  return async function (req: Request, _res: Response, next: NextFunction) {
    try {
      const body = parseDatesInBody(req);

      await schema.parseAsync(body);

      next();
    } catch (e: unknown) {
      if (e instanceof ZodError) {
        next(new ValidationError(getFormattedZodError(e)));
      }

      next(e);
    }
  };
}
