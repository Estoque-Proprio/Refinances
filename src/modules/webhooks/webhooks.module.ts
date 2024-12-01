import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { StripeService } from 'src/integrations/stripe';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, StripeService],
})
export class WebhooksModule {}
