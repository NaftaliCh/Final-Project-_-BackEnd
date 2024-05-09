import { NotificationService } from '../services/notificationService.js';
const notificationService = new NotificationService();

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId; // Asumsi bahwa ID user didapatkan dari token JWT
    const notifications = await notificationService.getUserNotifications(userId);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get notifications', error });
  }
};

export const markNotificationAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const result = await notificationService.setNotificationAsRead(notificationId);
    res.json({ message: 'Notification marked as read', result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to mark notification as read', error });
  }
};
