import { Router } from "express";
import * as uc from './controller/student.controller.js'
const router = Router()

router.post("/addUser",uc.addStudent)
router.post("/getQuestion/:KolbStyle/:GPDK",uc.studentQuestion)
<<<<<<< HEAD
export default router
=======
export default router
>>>>>>> 4fe530ac4f66e687cfa8ed7a9b08bc6a9b7d89ac
