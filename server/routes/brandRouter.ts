import {create, getAll} from "../Controllers/brandController.js"
import {Router} from "express";
const router = Router()


router.post('/', create)
router.get('/', getAll)


export default router