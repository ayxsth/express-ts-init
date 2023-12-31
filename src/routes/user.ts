import { Router } from 'express';

import { getUser, getUsers } from '@/controllers/user';

const router = Router();

router.get('/', getUsers);

router.get('/:id', getUser);

export default router;
