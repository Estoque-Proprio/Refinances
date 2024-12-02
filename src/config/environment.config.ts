export default () => ({
  port: parseInt(process.env.PORT!, 10) || 3000,
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  },
  tiny: {
    apiKey: process.env.TINY_API_KEY,
  },
});
