import { qbankModel } from "../../../DB/model/qbank.model.js";

export const addQuestion = async (req, res) => {
    try {
        const { questionStyle, complexity, domain, subDomain, concept, activityCategories, lessonNumber } = req.body;
        const Myquestion = new qbankModel({ questionStyle, complexity, domain, subDomain, concept, activityCategories, lessonNumber })
        const savedquestion = await Myquestion.save()
        res.json({ message: "Done", savedquestion })
    } catch (error) {
        res.json({ message: "error", error })
        console.log(error);
    }

}
// export const addQuestion2 = async (req, res) => {
//     try {
//         const { questionStyle, complexity } = req.body;
//         const Myquestion = new qbankModel({ questionStyle, complexity })
//         const savedquestion = await Myquestion.save()
//         res.json({ message: "Done", savedquestion })
//     } catch (error) {
//         res.json({ message: "error", error })
//         console.log(error);
//     }

// }
// export const addQuestion3 = async (req, res) => {
//     try {
//         const { questionStyle, complexity } = req.body;
//         const Myquestion = new qbankModel({ questionStyle, complexity })
//         const savedquestion = await Myquestion.save()
//         res.json({ message: "Done", savedquestion })
//     } catch (error) {
//         res.json({ message: "error", error })
//         console.log(error);
//     }

// }
// export const addQuestion4 = async (req, res) => {
//     try {
//         const { questionStyle, complexity } = req.body;
//         const Myquestion = new qbankModel({ questionStyle, complexity })
//         const savedquestion = await Myquestion.save()
//         res.json({ message: "Done", savedquestion })
//     } catch (error) {
//         res.json({ message: "error", error })
//         console.log(error);
//     }

// }


export const getQuestionWithAnswer = async (req, res, next) => {
    try {
        const { domain,subDomain,concept,activityCategories,complexity,indecators,currentLesson } = req.body;
        const questionAndAnswer = await qbankModel.find({ domain,subDomain,concept,activityCategories,complexity,indecators,currentLesson }).select("questionStyle answer")
        return res.json({ message: "Done", questionAndAnswer })
    } catch (error) {
        res.json({ message: `Catch Error ${error}` })
    }

}
