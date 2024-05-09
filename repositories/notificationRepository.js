import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class NotificationRepository {
  async getNotifications(userId) {
    return await prisma.notification.findMany({
      where: { userId, isRead: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async markAsRead(notificationId) {
    return await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true }
    });
  }
}

//
