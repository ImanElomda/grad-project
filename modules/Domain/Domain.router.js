import { Router } from "express";
import * as Dc from './controller/Domain.controller.js'
const router = Router()

router.post("/addDomain/",Dc.addDomain)
router.get("/getAnswerFormat/:domain/:subDomain",Dc.getAnswerFormat)

export default router