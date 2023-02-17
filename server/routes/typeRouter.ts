import {create, getAll} from "../Controllers/typeController.js";
import {Router} from "express";
const router = Router()


router.post('/', create )
router.get('/', getAll)


export default router