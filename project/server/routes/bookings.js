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

router.post('/',  createBooking); //protect
router.get('/',  getBookings); //protect
router.get('/:id',  getBookingById);//protect
router.put('/:id/status',  updateBookingStatus);//protect, provider,
router.put('/:id/cancel',  cancelBooking);//protect

export default router;