import { PaymentService } from '../services/paymentService.js';
const paymentService = new PaymentService();

export async function initiatePayment(req, res) {
  try {
    const { amount, source, description } = req.body;
    const charge = await paymentService.createCharge(amount, source, description);
    res.json(charge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
