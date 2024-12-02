import express from 'express';
import { protect, provider } from '../middleware/auth.js';
import {
  createBooking,
  getBookings,
  getBookingById,
  updateBookingStatus,
  cancelBooking,
} from '../controllers/bookings.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getBookings);
router.get('/:id', protect, getBookingById);
router.put('/:id/status', protect, provider, updateBookingStatus);
router.put('/:id/cancel', protect, cancelBooking);

export default router;