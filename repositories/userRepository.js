import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class UserRepository {
  async getAllUsers() {
    return await prisma.user.findMany();
  }
  async createUser(data) {
    return await prisma.user.create({ data });
  }
  async findUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }
  async updateUser(id, data) {
    return await prisma.user.update({ where: { id }, data });
  }
}

// 