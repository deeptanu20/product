import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createReview,
  getServiceReviews,
  updateReview,
  deleteReview,
} from '../controllers/reviews.js';

const router = express.Router();

router.post('/', protect, createReview);
router.get('/service/:serviceId', getServiceReviews);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

export default router;