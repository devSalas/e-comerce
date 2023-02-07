import { Schema, model } from "mongoose"

const roleSchema=new Schema({
    name:{type:String, unique:true,require:true} 
},{versionKey:false})

const rolemodel=model('role-user',roleSchema)

export default rolemodel