import { Router } from "express";
import * as lc from './controller/lesson.controller.js'
const router = Router()

router.post("/addlesson/:studentId",lc.addLessons)
// router.get("/getLesson/:lessonName",lc.getLesson)

export default router