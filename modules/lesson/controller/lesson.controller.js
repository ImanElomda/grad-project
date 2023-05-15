import { lessonModel } from "../../../DB/model/lesson.model.js"


export const addLessons = async (req, res) => {
    try {
        const { lessonId, concept, bloomLevel } = req.body;
        const { studentId } = req.params
        const lesson = new lessonModel({ lessonId, concept, bloomLevel, studentId })
        const savedlesson = await lesson.save()
        return res.json({ message: "Done", savedlesson })
    } catch (error) {
        return res.json({ message: "error", error })

    }
};
