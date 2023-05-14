import { Schema, model, Types } from "mongoose";

const DomainSchema = new Schema({
    domain: { type: String},
    subDomain: {type:Array},
    answerFormat:{type:String}
   
}, {
    timestamps: true
})

export const DomainModel = model('Domain', DomainSchema)