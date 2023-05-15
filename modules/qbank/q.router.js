import { Router } from "express";
import * as qc from './controller/q.controller.js'
const router = Router()


router.post("/addQ",qc.addQuestion)
router.get('/getquestionwithanswer',qc.getQuestionWithAnswer);
export default router