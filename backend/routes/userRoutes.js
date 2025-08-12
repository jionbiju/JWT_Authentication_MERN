import express from 'express';
import { createUser ,loginUser,logoutUser } from '../controllers/userController.js';

//Create Router object
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
// router.get('/profile',userProfile);

export default router;