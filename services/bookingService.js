import { BookingRepository } from '../repositories/bookingRepository.js';

const bookingRepository = new BookingRepository();

export class BookingService {
  async createBooking(data) {
    return await bookingRepository.createBooking(data);
  }

  async getBookingsByUser(userId) {
    return await bookingRepository.findBookingsByUserId(userId);
  }

  async getBookingById(bookingId) {
    return await bookingRepository.findBookingById(bookingId);
  }

  async updateBookingStatus(bookingId, status) {
    return await bookingRepository.updateBookingStatus(bookingId, status);
  }

  async deleteBooking(bookingId) {
    return await bookingRepository.deleteBooking(bookingId);
  }

  async getAllBookings() {
    return await bookingRepository.findAllBookings();
  }
}
