import {create, getAll} from "../Controllers/typeController.js";
import {Router} from "express";
import {checkRoleMiddleware} from "../middleware/checkRoleMiddlware.js";
const router = Router()


router.post('/', checkRoleMiddleware('ADMIN'), create )
router.get('/', getAll)


export default router