import { ScheduleRepository } from '../repositories/scheduleRepository.js';
const scheduleRepo = new ScheduleRepository();

export class ScheduleService {
  async getAvailableSchedules(date, fieldId) {
    return await scheduleRepo.findAvailableSchedules({ date, fieldId });
  }

  async getScheduleDetails(scheduleId) {
    return await scheduleRepo.findScheduleById(scheduleId);
  }
}
