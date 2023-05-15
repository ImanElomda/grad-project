import { qbankModel } from "../../../DB/model/qbank.model.js";

export const addQuestion = async (req, res) => {
    try {
        const { questionStyle, complexity, domain, subDomain, concept, activityCategories, currentLesson,indecators } = req.body;
        const Myquestion = new qbankModel({ questionStyle, complexity, domain, subDomain, concept, activityCategories, currentLesson,indecators })
        const savedquestion = await Myquestion.save()
        res.json({ message: "Done", savedquestion })
    } catch (error) {
        res.json({ message: "error", error })

    }

}

export const getQuestionWithAnswer = async (req, res, next) => {
    try {
        const { domain, subDomain, concept, activityCategories, complexity, indecators, currentLesson } = req.body;
        const questionAndAnswer = await qbankModel.find({ domain, subDomain, concept, activityCategories, complexity, indecators, currentLesson }).select("questionStyle answer")
        return res.json({ message: "Done", questionAndAnswer })
    } catch (error) {
        res.json({ message: `Catch Error ${error}` })
    }

}
