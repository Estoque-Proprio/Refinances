import { z } from 'zod';

export const validateEnv = z.object({
  PORT: z.string().default('3000'),
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_WEBHOOK_SECRET: z.string(),
});

export type EnvConfig = z.infer<typeof validateEnv>;
