import { NextFunction, Request, Response } from 'express';

import * as userService from '@/services/user';

export const getUsers = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.get();

    res.send(users);
  } catch (e) {
    next(e);
  }
};

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      params: { id }
    } = req;

    const user = await userService.findOrFail(Number(id));

    res.send(user);
  } catch (e) {
    next(e);
  }
};
