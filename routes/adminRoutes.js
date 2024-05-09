import express from 'express';
import { getAllBookings, getAllUsers } from '../controllers/adminController.js';
import { authenticateToken, checkAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/bookings', authenticateToken, checkAdmin, getAllBookings);
router.get('/users', authenticateToken, checkAdmin, getAllUsers);

export default router;

//
