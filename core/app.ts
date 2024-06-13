import dotenv from 'dotenv';
const envLoadResult = dotenv.config();
if(envLoadResult.error) {
  throw envLoadResult.error
}

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import setupRoutes from '../routes';
import { errorHandler } from '../middleware/errorHandler';
import { ApiError } from './model/ApiError';


const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow sending cookies from frontend to backend
}));

app.use(bodyParser.json());

setupRoutes(app);

app.all('*', (req, res, next) => {
  try {
    next(new ApiError(404, 'Route not found'));
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: ", err);
  console.log("Closing server now...");
  process.exit(1);
});
