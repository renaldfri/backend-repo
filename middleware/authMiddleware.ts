import { Request, Response, NextFunction } from 'express';
import { auth } from '../config/firebase';
import { ApiError } from '../core/model/ApiError';

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];

  if (!idToken) {
    return next(new ApiError(401, 'Unauthorized'));
  }

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req.currentUser = decodedToken; // Attach logged user to request object

    return next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return next(new ApiError(401, 'Unauthorized'));
  }
};
