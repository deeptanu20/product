import express from 'express';
import { body } from 'express-validator';
import { register, login, getProfile, updateProfile } from '../controllers/auth.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/register',
  [
      body('name').notEmpty().withMessage('Name is required'),
      body('email').isEmail().withMessage('Invalid email address'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ],
 register
);

router.post('/login', [
  body('email').isEmail(),
  body('password').exists(),
], login);

router.get('/profile',  getProfile); //protect,
router.put('/profile', updateProfile); //protect, 

export default router;