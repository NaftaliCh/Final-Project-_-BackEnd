import { BookingService } from '../services/bookingService.js';
const bookingService = new BookingService();

export async function createBooking(req, res) {
  try {
    const { userId, scheduleId } = req.body;
    const booking = await bookingService.bookSchedule(userId, scheduleId);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getUserBookings(req, res) {
  try {
    const { userId } = req.params;
    const bookings = await bookingService.getUserBookings(userId);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateBooking(req, res) {
  try {
    const { bookingId, status } = req.body;
    const updatedBooking = await bookingService.updateBooking(bookingId, status);
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function cancelBooking(req, res) {
  try {
    const { bookingId } = req.params;
    const cancelledBooking = await bookingService.cancelBooking(bookingId);
    res.json(cancelledBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
