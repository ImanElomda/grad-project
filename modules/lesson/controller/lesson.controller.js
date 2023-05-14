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
        console.log(error);
    }
};



// export const getLesson = async (req, res) => {
//     const { lessonNumber } = req.params
//     const lesson = await lessonModel.findOne({ lessonNumber }).select('concept bloomLevel')
//     if (!lesson) {
//         res.status(500).json({message:"error"})
//     } else {
//         res.json({message:"Done",concept:lesson.concept,bloomLevel:lesson.bloomLevel})
//     }


// }