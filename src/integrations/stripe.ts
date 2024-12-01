import Stripe from 'stripe';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService extends Stripe {
  constructor(configService: ConfigService) {
    super(configService.get('stripe.secretKey'), {
      apiVersion: '2024-11-20.acacia',
    });
  }
}
