import { FieldRepository } from '../repositories/fieldRepository.js';
const fieldRepo = new FieldRepository();

export class FieldService {
  async addField(fieldData) {
    return await fieldRepo.createField(fieldData);
  }

  async listFields() {
    return await fieldRepo.getAllFields();
  }

  async getFieldDetails(fieldId) {
    return await fieldRepo.getFieldById(fieldId);
  }

  async modifyField(fieldId, updateData) {
    return await fieldRepo.updateField(fieldId, updateData);
  }

  async removeField(fieldId) {
    return await fieldRepo.deleteField(fieldId);
  }
}
