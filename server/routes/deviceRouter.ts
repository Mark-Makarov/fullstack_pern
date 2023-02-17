import {create, getAll, getOne} from "../Controllers/deviceController.js"
import {Router} from "express";
const router = Router()


router.post('/', create)
router.get('/', getAll)
router.get('/:id', getOne)


export default router
