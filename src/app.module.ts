import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './validations/env.validation';
import { WebhooksModule } from './modules/webhooks/webhooks.module';
import envConfig from './config/environment.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
      validate: (config) => {
        const result = validateEnv.safeParse(config);
        if (!result.success) {
          console.error(
            'Invalid environment variables:',
            result.error.format(),
          );
          throw new Error('Environment validation failed');
        }
        return result.data;
      },
    }),
    WebhooksModule,
  ],
})
export class AppModule {}
