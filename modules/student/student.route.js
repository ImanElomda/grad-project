import { Router } from "express";
import * as uc from './controller/student.controller.js'
const router = Router()

router.post("/addUser",uc.addStudent)
router.get("/getStudent/:studentName",uc.getStudent)
router.get("/getQuestion/:KolbStyle/:GPDK",uc.studentQuestion)
export default router