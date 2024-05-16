import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class BookingRepository {
  async createBooking({ userId, scheduleId }) {
    return await prisma.booking.create({
      data: {
        userId,
        scheduleId,
        status: 'booked'
      }
    });
  }

  async findBookingsByUserId(userId) {
    return await prisma.booking.findMany({
      where: { userId },
      include: { Schedule: true }
    });
  }

  async findBookingById(bookingId) {
    return await prisma.booking.findUnique({
      where: { id: bookingId },
      include: { Schedule: true, User: true }
    });
  }

  async updateBookingStatus(bookingId, status) {
    return await prisma.booking.update({
      where: { id: bookingId },
      data: { status }
    });
  }

  async deleteBooking(bookingId) {
    return await prisma.booking.delete({
      where: { id: bookingId }
    });
  }

  async findAllBookings() {
    return await prisma.booking.findMany({
      include: { Schedule: true, User: true }
    });
  }
}
