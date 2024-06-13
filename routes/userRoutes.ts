import { Router } from 'express';
import { createUser, getAllUsers } from '../controllers/userController';
import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

router.post('/users', verifyToken, createUser);
router.get('/users', verifyToken, getAllUsers);

export default router;
