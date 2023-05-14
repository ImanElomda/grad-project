import { Router } from "express";
import * as qc from './controller/q.controller.js'
const router = Router()


router.post("/addQ",qc.addQuestion)
// router.post("/addQ2",qc.addQuestion2)
// router.post("/addQ3",qc.addQuestion3)
// router.post("/addQ4",qc.addQuestion4)
router.get('/getquestionwithanswer',qc.getQuestionWithAnswer);
export default router