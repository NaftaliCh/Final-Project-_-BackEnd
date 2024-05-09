import express from 'express';
import { getAvailableSchedules, getScheduleDetails } from '../controllers/scheduleController.js';

const router = express.Router();

router.get('/', getAvailableSchedules);
router.get('/:scheduleId', getScheduleDetails);

export default router;

//