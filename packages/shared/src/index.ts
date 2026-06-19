import { z } from 'zod';

export { z };

export const statusSchema = z.object({
  service: z.literal('real-bench'),
  state: z.literal('ready'),
});

export type Status = z.infer<typeof statusSchema>;
