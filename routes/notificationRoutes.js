import express from 'express';
import { getNotifications, markNotificationAsRead } from '../controllers/notificationController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, getNotifications);
router.post('/:notificationId/mark-as-read', authenticateToken, markNotificationAsRead);

export default router;
