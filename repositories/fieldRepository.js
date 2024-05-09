import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class FieldRepository {
  async createField(data) {
    return await prisma.field.create({
      data: data
    });
  }

  async getAllFields() {
    return await prisma.field.findMany({});
  }

  async getFieldById(id) {
    return await prisma.field.findUnique({
      where: { id: id }
    });
  }

  async updateField(id, data) {
    return await prisma.field.update({
      where: { id: id },
      data: data
    });
  }

  async deleteField(id) {
    return await prisma.field.delete({
      where: { id: id }
    });
  }
}
