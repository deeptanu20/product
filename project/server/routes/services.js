import express from 'express';
import { protect, provider, admin } from '../middleware/auth.js';
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  updateAvailability,
} from '../controllers/services.js';

const router = express.Router();

router.post('/', protect, provider, createService);
router.get('/', getServices);
router.get('/:id', getServiceById);
router.put('/:id', protect, provider, updateService);
router.delete('/:id', protect, admin, deleteService);
router.put('/:id/availability', protect, provider, updateAvailability);

export default router;