import { KolbStyleModel } from "../../../DB/model/KolbStyle.model.js";
export const addKolbStyle = async (req, res) => {
    try {
        const { character, learning_styles } = req.body;
        const KolbStyle = new KolbStyleModel({ character, learning_styles })
        const savedkolbStyle = await KolbStyle.save()
        return res.json({ message: "Done", savedkolbStyle })
    } catch (error) {
        return res.json({ message: "error", error })

    }
};


export const getIndecators = async (req, res) => {
    const { character } = req.params
    const KolbStyle = await KolbStyleModel.findOne({ character })
    if (!KolbStyle) {
        return res.status(500).json({ message: "error" })
    } else {
        const learning_styles = KolbStyle.learning_styles
        const indecators = []
        if (learning_styles.length === 1) {
            indecators.push(0);
        } else if (learning_styles.length === 2) {
            indecators.push(0, -1);
        } else if (learning_styles.length === 3) {
            indecators.push(0, -1, 1)
        } else {
            return res.status(404).json({ message: "error" })
        }
        return res.json({ message: "Done", indecators })

    }

}

