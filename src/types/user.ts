import z from 'zod';

import { UserZSchema } from '@/schemas/user';

export type User = z.infer<typeof UserZSchema>;
