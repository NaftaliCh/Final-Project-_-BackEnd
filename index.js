import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});