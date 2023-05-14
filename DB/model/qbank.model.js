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
    activityCaregories: {
        type: String,
    },

    answer: {
        type: String
    },
    complexity: {
        type: Number,
    }
}, {
    timestamps: true
}
);

export const qbankModel = model('qbank', qSchema)