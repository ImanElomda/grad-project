import { bloomLevelModel } from "../../../DB/model/bloomLevel.model.js";
import axios from "axios";
import { qbankModel } from "../../../DB/model/qbank.model.js";
import { studentModel } from "../../../DB/model/student.model.js";
import { DomainModel } from "../../../DB/model/Domain.model.js";
import { KolbStyleModel } from "../../../DB/model/KolbStyle.model.js";

export const addStudent = async (req, res) => {
    try {
        const { name, KolbStyle, GPDK } = req.body;
        const student = await studentModel({ name, KolbStyle, GPDK })
        const savedStudent = await student.save()
        return  res.json({ message: "Done", savedStudent })
    } catch (error) {
        return  res.json({ message: "error", error })
        console.log(error);
    } git
};
export const getStudent = async (req, res) => {
    const { studentName } = req.params
    const student = await studentModel.findOne({ studentName }).select('KolbStyle')
    if (!student) {
        res.status(500).json({ message: "error" })
    } else {
        return  res.json({ message: "Done", KolbStyle: student.KolbStyle })
    }


}



export const studentQuestion = async (req, res) => {
    const { GPDK, KolbStyle } = req.params
    const { bloomLevel, domain, subDomain, currentLesson } = req.body


    let question
    let { data: { activityCategories } } = await axios.get(`${process.env.ENDURL}/api/v1/bloomLevel/getActivityCategories/${bloomLevel}`)
    // console.log(activityCategories);

    let { data: { answerFormat } } = await axios.get(`${process.env.ENDURL}/api/v1/domain/getAnswerFormat/${domain}/${subDomain}`)

    let { data: { indecators } } = await axios.get(`${process.env.ENDURL}/api/v1/kolbStyle/getIndecators/${KolbStyle}`)

    console.log(indecators);

    console.log(answerFormat);


    if (KolbStyle == "Divergent") {

        try {
            if (GPDK == "Beginner") {
                // question = await qbankModel.findOne({ $and: [{ $or: [{ complexity: 1 }, { complexity: 2 }] }, { indecators: 1 }] })
                // console.log(question);
                console.log("in beginner divergent");
                // console.log(activityCategories);
                question = await qbankModel.findOne({complexity: {$in: [1,2]}, indecators: indecators[0], activityCategories: activityCategories, currentLesson: currentLesson})
                // console.log(question);
                return  res.json({ message: `${question.questionStyle}. Present your answer using examples and images` })



            } else if (GPDK == "Intermediate") {
                console.log("in intermiate");
                question = await qbankModel.findOne({complexity: {$in: [3,4]}, indecators: indecators[1], activityCategories: activityCategories})
                console.log(question);
                // console.log(question);
                return  res.json({ message: `${question.questionStyle}. Present your answer using examples and images` })



            }
            else if (GPDK == "Excellent") {
                question = await qbankModel.findOne({complexity: {$in: [5,6]}, indecators: indecators[2], activityCategories: activityCategories})
                console.log(question);
                return  res.json({ message: `${question.questionStyle}. Present your answer using examples and images` })
            }

            else {
                return  res.json({ message: "Not found" })
            }


        }
        catch (error) {
            return  res.json({ message: "catch error", error })
            console.log(error);
        }
    } else if (KolbStyle == "Assimilator") {
        try {
            if (GPDK == "Beginner") {

                question = await qbankModel.findOne({complexity: {$in: [1,2]}, indecators: indecators[0], activityCategories: activityCategories})

                return  res.json({ message: `${question.questionStyle}. Present your answer in an organized shape like a table` })


            } else if (GPDK == "Intermediate") {
                question = await qbankModel.findOne({complexity: {$in: [3,4]}, indecators: indecators[1], activityCategories: activityCategories})

                return  res.json({ message: `${question.questionStyle}. Present your answer in an organized shape like a table` })

            }
            else if (GPDK == "Excellent") {
                question = await qbankModel.findOne({complexity: {$in: [5,6]}, indecators: indecators[2], activityCategories: activityCategories})
                return  res.json({ message: `${question.questionStyle}. Present your answer in an organized shape like a table` })


            } else {
                return  res.json({ message: "Not found" })
            }


        }
        catch (error) {
            return  res.json({ message: "catch error", error })
        }
    } else if (KolbStyle == "Convergent") {
        try {
            if (GPDK == "Beginner") {

                question = await qbankModel.findOne({complexity: {$in: [1,2]}, indecators: indecators[0], activityCategories: activityCategories})
                console.log(question);

                return  res.json({ message: `${question.questionStyle}.Present your answer as an organized shape. ${answerFormat}` })


            } else if (GPDK == "Intermediate") {
                question = await qbankModel.findOne({complexity: {$in: [3,4]}, indecators: indecators[1], activityCategories: activityCategories})
                return  res.json({ message: `${question.questionStyle}. Present your answer as an organized shape. ${answerFormat}` })



            }
            else if (GPDK == "Excellent") {
                question = await qbankModel.findOne({complexity: {$in: [5,6]}, indecators: indecators[1], activityCategories: activityCategories})
                return  res.json({ message: `${question.questionStyle}. Present your answer as an organized shape. ${answerFormat}` })


            } else {
                return  res.json({ message: "Not found" })
            }


        }
        catch (error) {
            return  res.json({ message: "catch error", error })
            console.log(error);
        }
    } else if (KolbStyle == "Accommodator") {
        try {
            if (GPDK == "Beginner") {
                question = await qbankModel.findOne({complexity: {$in: [1,2]}, indecators: indecators[0], activityCategories: activityCategories})
                console.log(question);

                return  res.json({ message: `${question.questionStyle}.Present your answer as a recorded video/audio that explain your opinion` })


            } else if (GPDK == "Intermediate") {
                question = await qbankModel.findOne({complexity: {$in: [3,4]}, indecators: indecators[0], activityCategories: activityCategories})

                return  res.json({ message: `${question.questionStyle}. Present your answer as a recorded video/audio that explain your opinion` })



            }
            else if (GPDK == "Excellent") {
                question = await qbankModel.findOne({complexity: {$in: [5,6]}, indecators: indecators[0], activityCategories: activityCategories})
                return  res.json({ message: `${question.questionStyle}. Present your answer as a recorded video/audio that explain your opinion` })


            } else {
                return  res.json({ message: "Not found" })
            }


        }
        catch (error) {
            return  res.json({ message: "catch error", error })
        }
    }
}
