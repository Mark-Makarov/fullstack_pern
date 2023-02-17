import {Router} from "express";
import {registration, login, check} from "../Controllers/userController.js"


const router = Router()

router.post('/registration', registration)
router.post('/login', login)
router.get('/auth', check)

export default router