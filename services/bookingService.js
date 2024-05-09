import { BookingRepository } from '../repositories/bookingRepository.js';
const bookingRepo = new BookingRepository();

export class BookingService {
  async listAllBookings() {
    return await bookingRepo.getAllBookings();
  }
  async bookSchedule(userId, scheduleId) {
    return await bookingRepo.createBooking({ userId, scheduleId });
  }

  async getUserBookings(userId) {
    return await bookingRepo.findBookingsByUserId(userId);
  }

  async updateBooking(bookingId, status) {
    return await bookingRepo.updateBookingStatus(bookingId, status);
  }

  async cancelBooking(bookingId) {
    return await bookingRepo.deleteBooking(bookingId);
  }
}
