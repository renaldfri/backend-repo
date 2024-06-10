import { Express } from 'express';
import userRoutes from './userRoutes';

const setupRoutes = (app: Express) => {
  app.use('/api', userRoutes);
};

export default setupRoutes;
