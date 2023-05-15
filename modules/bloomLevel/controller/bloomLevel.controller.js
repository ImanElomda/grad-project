import { bloomLevelModel } from "../../../DB/model/bloomLevel.model.js";

export const addBloomLevel = async (req, res) => {
    try {
        const { bloomLevel, activityCategories } = req.body;
        const BloomLevel = new bloomLevelModel({ bloomLevel, activityCategories })
        const savedBloomLeve = await BloomLevel.save()
        return res.json({ message: "Done", savedBloomLeve })
    } catch (error) {
        return res.json({ message: "error", error })

    }
};

export const getActivityCategories = async (req, res) => {
    const { bloomLevel } = req.query
    const { activityCategories: [activityCategories] } = await bloomLevelModel.findOne({ bloomLevel }).select('activityCategories')
    if (!activityCategories) {
        res.status(500).json({ message: "error" })
    } else {
        return res.json({ message: "Done", activityCategories })
    }

}
