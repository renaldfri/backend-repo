import { Request, Response } from 'express';
import { userCollection } from '../repository/userCollection';

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }
  try {
    const user = await userCollection.addUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userCollection.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
};
