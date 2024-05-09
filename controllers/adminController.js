import { BookingService } from '../services/bookingService.js';
import { UserService } from '../services/userService.js';

const bookingService = new BookingService();
const userService = new UserService();

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingService.listAllBookings();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bookings', error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.listAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error });
  }
};

//
