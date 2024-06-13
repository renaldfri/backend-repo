import { NextFunction, Request, Response } from 'express';
import { userCollection } from '../repository/userCollection';
import { ApiError } from '../core/model/ApiError';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return (new ApiError(400, 'Name and email are required'));
  }
  try {
    const user = await userCollection.addUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    throw new ApiError(500, 'Error creating user');
  }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userCollection.getUsers();
    res.status(200).json(users);
  } catch (error) {
    return (new ApiError(500, 'Error creating user'));
  }
};
