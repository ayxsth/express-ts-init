import _ from 'lodash';
import { ZodError } from 'zod';
import { HttpStatusCode } from 'axios';

import { GENERIC_ERROR, INVALID_TOKEN_ERROR } from '@/constants/error';

import TokenError from '@errors/token';
import NotFoundError from '@errors/notFound';
import DatabaseError from '@errors/database';
import ForbiddenError from '@errors/forbidden';
import ValidationError from '@errors/validation';
import BadRequestError from '@errors/badRequest';

export function buildError(error: Error) {
  if (error instanceof NotFoundError) {
    return {
      code: HttpStatusCode.NotFound,
      message: error.message
    };
  }

  if (error instanceof ValidationError) {
    return {
      code: HttpStatusCode.BadRequest,
      message: error.message
    };
  }

  if (error instanceof BadRequestError) {
    return {
      code: HttpStatusCode.BadRequest,
      message: error.message
    };
  }

  if (error instanceof ForbiddenError) {
    return {
      code: HttpStatusCode.Forbidden,
      message: error.message
    };
  }

  if (error instanceof DatabaseError) {
    return {
      code: HttpStatusCode.BadRequest,
      message: GENERIC_ERROR
    };
  }

  if (error instanceof TokenError) {
    return {
      code: HttpStatusCode.Unauthorized,
      message: error.message || INVALID_TOKEN_ERROR
    };
  }

  return {
    code: HttpStatusCode.InternalServerError,
    message: GENERIC_ERROR
  };
}

export function getFormattedZodError(error: ZodError) {
  const formattedError = error.issues
    .map((issue) => `${issue.path.join('.')} is ${_.lowerFirst(issue.message)}`)
    .join(', ');

  return formattedError;
}
