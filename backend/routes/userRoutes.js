import express from 'express';

//Create Router object
const router = express.routerr();

router.post('/register',createUser);
router.post('login',loginUser);
router.post('logout',logoutUser);
router.get('/profile',userProfile);

export default router;