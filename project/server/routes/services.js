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

router.post('/', createService); //protect,provider, 
router.get('/', getServices);
router.get('/:id', getServiceById);
router.put('/:id',   updateService); //protect,provider,
router.delete('/:id',  deleteService); //protect, admin,
router.put('/:id/availability', updateAvailability); //protect,provider, 

export default router;