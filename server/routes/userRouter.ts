import {Router} from "express";
import {registration, login, check} from "../Controllers/userController.js"
import {authMiddlewareFunc} from "../middleware/authMiddleware.js";


const router = Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', authMiddlewareFunc, check)

export default router