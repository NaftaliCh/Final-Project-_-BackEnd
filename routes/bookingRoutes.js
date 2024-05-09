import express from 'express';
import { createBooking, getUserBookings, updateBooking, cancelBooking } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/user/:userId', getUserBookings);
router.put('/', updateBooking);
router.delete('/:bookingId', cancelBooking);

export default router;
