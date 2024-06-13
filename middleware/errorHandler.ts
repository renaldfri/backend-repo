import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../core/model/ApiError';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    const { status, message } = err;
    res.status(status).json({
      status,
      message,
    });
  } else {
    // Handle other types of errors (e.g., unexpected errors)
    console.error('Unhandled error:', err);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
    });
  }
};
