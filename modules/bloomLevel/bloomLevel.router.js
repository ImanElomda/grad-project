import { Router } from "express";
import * as Bc from './controller/bloomLevel.controller.js'
const router = Router()

router.post("/addBloomLevel/",Bc.addBloomLevel)
router.get("/getActivityCategories/:bloomLevel",Bc.getActivityCategories)

export default router