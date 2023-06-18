import { Router } from "express";
import * as uc from './controller/student.controller.js'
const router = Router()

router.post("/addUser",uc.addStudent)
router.post("/getQuestion/:KolbStyle/:GPDK",uc.studentQuestion)
