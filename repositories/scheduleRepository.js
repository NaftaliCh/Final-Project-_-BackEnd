import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class ScheduleRepository {
  async findAvailableSchedules({ date, fieldId }) {
    return await prisma.schedule.findMany({
      where: {
        fieldId: fieldId,
        startTime: {
          gte: new Date(date)
        },
        endTime: {
          lte: new Date(date)
        },
        available: true
      },
      include: {
        Field: true
      }
    });
  }

  async findScheduleById(id) {
    return await prisma.schedule.findUnique({
      where: { id },
      include: {
        bookings: true
      }
    });
  }
}
