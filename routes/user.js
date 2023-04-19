import { Router } from 'express'
import { deleteUserController, getUserController, getUsersController, postNewUser } from '../controller/userController.js';

const router = Router()

router.get('/users',getUsersController)
router.get('/users/:userId', getUserController)
router.delete('/users/:userId', deleteUserController)
router.post('/users', postNewUser)


router.post('/users',(req,res)=>{
   console.log(req);
} )

export default router;

