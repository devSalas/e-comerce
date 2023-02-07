import { Schema, model } from "mongoose"

const userSchema=new Schema({
    name:{type:String, require:true, minLength:3, maxLength:15},
    email:{type:String, require:true},
    password:{type:String, require:true, minLength:8},
    role:[{type:Schema.Types.ObjectId ,ref:'role-user'}],
    favorite:[{type:Schema.Types.ObjectId,ref:'e-product'}]
},{versionKey:false,timestamps:true})

const usermodel=model('e-user',userSchema)

export default usermodel