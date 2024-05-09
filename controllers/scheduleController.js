import { ScheduleService } from '../services/scheduleService.js';
const scheduleService = new ScheduleService();

export async function getAvailableSchedules(req, res) {
  try {
    const { date, fieldId } = req.query;
    const schedules = await scheduleService.getAvailableSchedules(date, fieldId);
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getScheduleDetails(req, res) {
  try {
    const { scheduleId } = req.params;
    const schedule = await scheduleService.getScheduleDetails(scheduleId);
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
