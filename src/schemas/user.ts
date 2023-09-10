import z from 'zod';

export const UserZSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    email: z.string().email()
  })
  .strict();
