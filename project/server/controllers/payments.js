import Stripe from 'stripe';
import Booking from '../models/Booking.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.bookingId)
      .populate('service');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(booking.price * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        bookingId: booking._id.toString(),
      },
    });

    booking.paymentIntentId = paymentIntent.id;
    await booking.save();

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.bookingId);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.paymentStatus = 'completed';
    await booking.save();

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const refundPayment = async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.bookingId);
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const refund = await stripe.refunds.create({
      payment_intent: booking.paymentIntentId,
    });

    booking.paymentStatus = 'refunded';
    await booking.save();

    res.json({ refund, booking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};