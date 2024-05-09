import { UserService } from '../services/userService.js';

const userService = new UserService();

export async function register(req, res) {
  try {
    const user = await userService.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const result = await userService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export async function getProfile(req, res) {
  try {
    const user = await userService.getProfile(req.user.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function updateProfile(req, res) {
  try {
    const user = await userService.updateProfile(req.user.userId, req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export async function changePassword(req, res) {
  try {
    const { oldPassword, newPassword } = req.body;
    await userService.changePassword(req.user.userId, oldPassword, newPassword);
    res.send('Password updated successfully');
  } catch (error) {
  res.status(400).json({ error: error.message });
  }
};

//
