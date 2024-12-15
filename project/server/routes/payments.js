import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createPaymentIntent,
  confirmPayment,
  refundPayment,
} from '../controllers/payments.js';

const router = express.Router();

router.post('/create-intent',  createPaymentIntent);//protect
router.post('/confirm',  confirmPayment);//protect
router.post('/refund',  refundPayment);//protect

export default router;