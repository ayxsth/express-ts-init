import { Request, Response } from 'express';

import config from '../config';

const { app } = config;

export const healthCheck = (req: Request, res: Response) => {
  res.send({
    app: app.name,
    version: app.version
  });
};
