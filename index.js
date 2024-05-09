import express from 'express';
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import scheduleRoutes from './routes/scheduleRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import fieldRoutes from './routes/fieldRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', userRoutes);
app.use('/admin', adminRoutes);
app.use('/schedules', scheduleRoutes);
app.use('/bookings', bookingRoutes);
app.use('/payments', paymentRoutes);
app.use('/fields', fieldRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//