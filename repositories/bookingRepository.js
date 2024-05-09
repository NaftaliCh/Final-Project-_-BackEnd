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
      include: {
        Schedule: {
          include: {
            Field: true // Assuming the Schedule model has a relation to a Field model
          }
        },
        User: true // Include User data
      }
    });
  }

  async getAllBookings() {
    return await prisma.booking.findMany({
      include: {
        User: true, // Include User data for admin to view who made the booking
        Schedule: {
          include: {
            Field: true // Include Field data to show where the booking is made
          }
        }
      }
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
}

//
