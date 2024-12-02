import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createPaymentIntent,
  confirmPayment,
  refundPayment,
} from '../controllers/payments.js';

const router = express.Router();

router.post('/create-intent', protect, createPaymentIntent);
router.post('/confirm', protect, confirmPayment);
router.post('/refund', protect, refundPayment);

export default router;