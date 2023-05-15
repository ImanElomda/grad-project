import { Router } from "express";
import * as kc from './controller/KolbStyle.controller.js'
const router = Router()

router.post("/addkolbStyle",kc.addKolbStyle)
router.get("/getIndecators/:character",kc.getIndecators)
export default router