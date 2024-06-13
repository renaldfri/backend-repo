// src/types/express.d.ts
import { Request } from 'express';
import { LoggedUser } from '../model/LoggedUser'; // Adjust path as necessary

declare module 'express' {
  interface Request {
    currentUser?: LoggedUser;
  }
}