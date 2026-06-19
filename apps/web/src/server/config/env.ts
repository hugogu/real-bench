import { z } from '@real-bench/shared';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  APP_SECRET: z.string().min(32),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  throw new Error(`Invalid environment: ${result.error.message}`);
}

export const env = result.data;
