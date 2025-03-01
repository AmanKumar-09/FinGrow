import { register, login, logout } from '../controllers/login.controller.js';
import { Router } from 'express';
import { verifyjwt } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyjwt, logout);

export default router;
