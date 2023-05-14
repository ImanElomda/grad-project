import { Schema, model, Types } from "mongoose";

const lessonSchema = new Schema({
    currentLesson: { type: String, required: true },
    concepts: {type:String},
    bloomLevel:{type:String},
    studentNum:{ type: Types.ObjectId, ref: 'Student', required: true}

}, {
    timestamps: true
})

export const lessonModel = model('Lesson', lessonSchema)