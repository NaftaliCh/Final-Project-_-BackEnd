import { NotificationRepository } from '../repositories/notificationRepository.js';
const notificationRepo = new NotificationRepository();

export class NotificationService {
  async getUserNotifications(userId) {
    return await notificationRepo.getNotifications(userId);
  }

  async setNotificationAsRead(notificationId) {
    return await notificationRepo.markAsRead(notificationId);
  }
}

//