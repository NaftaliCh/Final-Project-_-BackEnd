import { UserRepository } from '../repositories/userRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository();

export class UserService {
  async register(data) {
    const hashedPassword = await bcrypt.hash(data.password, 8);
    const newUser = { ...data, password: hashedPassword };
    return await userRepository.createUser(newUser);
  }

  async login(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Authentication failed');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }

  async getProfile(userId) {
    return await userRepository.findUserByEmail(userId);
  }

  async updateProfile(userId, data) {
    return await userRepository.updateUser(userId, { name: data.name });
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await userRepository.findUserByEmail(userId);
    if (!(await bcrypt.compare(oldPassword, user.password))) {
      throw new Error('Old password is incorrect');
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 8);
    return await userRepository.updateUser(userId, { password: hashedNewPassword });
  }
}

//