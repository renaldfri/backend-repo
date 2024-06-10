import { Request, Response } from 'express';
import { userCollection } from '../repository/userCollection';

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }
  const user = userCollection.addUser(name, email);
  res.status(201).json(user);
};

export const getAllUsers = (req: Request, res: Response) => {
  const users = userCollection.getUsers();
  res.status(200).json(users);
};
