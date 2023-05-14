import { Schema, model, Types } from "mongoose";

const KolbStyleSchema = new Schema({
    character: { type: String, required: true },
    learning_styles: {type:Array}
    

}, {
    timestamps: true
})

export const KolbStyleModel = model('KolbStyle', KolbStyleSchema)