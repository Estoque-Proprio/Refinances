import { Controller, Post, RawBodyRequest, Req, Res } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { Request, Response } from 'express';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('stripe')
  async handleStripeEvent(
    @Req() req: RawBodyRequest<Request>,
    @Res() res: Response,
  ) {
    try {
      const stripeEvent = await this.webhookService.handleStripeEvent(
        req.rawBody,
        req.headers,
      );

      console.log('Stripe Event:', stripeEvent);

      res.json({ received: true });
    } catch (error) {
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
}
