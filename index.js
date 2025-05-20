import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Routes
import { router as userRouter } from './routes/userRoutes.js';
import { router as quoteRouter } from './routes/quoteRoutes.js';
import { router as todoRouter } from '../backend/routes/todoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/users', userRouter);
app.use('/api/quotes', quoteRouter);
app.use('/api/todos', todoRouter);

// Basic health check route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
