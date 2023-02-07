import { Schema,model } from "mongoose"

const jwtSchema=new Schema({
    jwt:{type:String,require:true,unique:true},
    status:{type:Boolean,require:true},
    userId:{type:Schema.Types.ObjectId,ref:'e-user',require:true,unique:true}  
},{versionKey:false,timestamps:true})

const jwtmodel=model('e-jwt',jwtSchema)

export default jwtmodel