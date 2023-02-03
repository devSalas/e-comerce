import { Schema, model } from "mongoose"

const userSchema=new Schema({
    
    name:{type:String, require:true, minLength:3, maxLength:15},
    surname:{type:String, require:true, minLength:5, maxLength:12},
    email:{type:String, require:true},
    password:{type:String, require:true, minLength:8}
},{versionKey:false})

const usermodel=model('e-user',userSchema)

export default usermodel