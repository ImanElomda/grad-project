import { DomainModel } from "../../../DB/model/Domain.model.js";

export const addDomain = async (req, res) => {
    try {
        const { domain, subDomain, answerFormat } = req.body;
        const Domain = new DomainModel({ domain, subDomain, answerFormat })
        const savedDomain = await Domain.save()
        return res.json({ message: "Done", savedDomain })
    } catch (error) {
        return res.json({ message: "error", error })
        console.log(error);
    }
};

export const getAnswerFormat = async (req, res) => {

    const { domain, subDomain } = req.params
    try {

        const subDomain1 = await DomainModel.findOne
            ({ $or: [{ domain, subDomain: { $in: [subDomain] } }, { domain, subDomain: [] }] })
        if (!subDomain1) {
            return res.json({ message: "in-valid" })
        } else {
            return res.status(200).json({ message: "Done", answerFormat: subDomain1.answerFormat })
            console.log(subDomain1.answerFormat);
        }

    }
    catch (error) {
        return res.json({ message: "error Catch", error })
    }
}





