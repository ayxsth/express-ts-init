import { Router } from 'express';

import { healthCheck } from '@/controllers/health';

import userRouter from './user';

const router = Router();

// Health Check
router.get('/', healthCheck);

router.use('/users', userRouter);

export default router;
