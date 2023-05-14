import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: { type: String, required: true },
    KolbStyle: { type: String, required: true },
    GPDK: { type: String, required: true }
    // currentLesson:{type:String}


}, {
    timestamps: true
})

export const studentModel = model('Student', studentSchema)