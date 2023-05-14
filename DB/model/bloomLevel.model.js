import { Schema, model, Types } from "mongoose";

const bloomLevelSchema = new Schema({
    bloomLevel: { type: String},
    activityCategories: {type:Array},
   
}, {
    timestamps: true
})

export const bloomLevelModel = model('BloomLevel', bloomLevelSchema)