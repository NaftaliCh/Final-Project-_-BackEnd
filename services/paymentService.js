import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export class PaymentService {
  async createCharge(amount, source, description) {
    try {
      const charge = await stripe.charges.create({
        amount: amount, 
        currency: 'usd',
        source: source,
        description: description
      });
      return charge;
    } catch (error) {
      throw error;
    }
  }

 
}

//