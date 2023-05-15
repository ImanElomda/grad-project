import { Router } from "express";
import * as uc from './controller/student.controller.js'
const router = Router()

router.post("/addUser",uc.addStudent)
router.get("/getStudent",uc.getStudent)
router.get("/getQuestion",uc.studentQuestion)
export default router