import { Schema, model, Types, Mongoose } from "mongoose";

const qSchema = new Schema({
    questionStyle: {
        type: String,
    },
    domain: {
        type: String,
    },
    subDomain: {
        type: String,
    },
    concept: {
        type: String,
    },
    activityCategories: {
        type: String,
    },

    answer: {
        type: String
    },
    complexity: {
        type: Number,
    },
    indecators:{
        type: Number
    },
    currentLesson: {
        type: Schema.Types.ObjectId,
        ref: "lessons"
    }
}, {
    timestamps: true
}
);

export const qbankModel = model('qbank', qSchema)