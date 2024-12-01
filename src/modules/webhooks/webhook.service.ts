import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StripeService } from 'src/integrations/stripe';

@Injectable()
export class WebhookService {
  constructor(
    private readonly stripeService: StripeService,
    private readonly configService: ConfigService,
  ) {}

  async handleStripeEvent(body: any, headers: any) {
    const webhookSecret = this.configService.get('stripe.webhookSecret');

    const stripeEvent = this.stripeService.webhooks.constructEvent(
      body,
      headers['stripe-signature'],
      webhookSecret,
    );
    return stripeEvent;
  }
}
