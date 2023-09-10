import express from 'express';

import routes from './routes';

import { requestLogger } from './middlewares/logger';
import { genericErrorHandler, endpointNotFoundError } from './middlewares/error';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.use('/api', routes);

// Error Handlers
app.use(genericErrorHandler);
app.use(endpointNotFoundError);

export default app;
