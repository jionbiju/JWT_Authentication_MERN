import express from 'express';
import { createUser ,loginUser,logoutUser,userProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authmiddleware.js';

//Create Router object
const router = express.Router();

router.post('/register',createUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser);
router.get('/profile/:id',protect,userProfile);

export default router;