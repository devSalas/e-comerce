import { Schema, model } from "mongoose"

const productSchema=new Schema({
    title:{type:String, require:true},
    price:{type:Number, require:true},
    description:{type:String, require:true},
    category:{type:String, require:true},
    image_url:{type:String, require:true},
    stock:{type:Number, require:true}
},{versionKey:false,timestamps:true})   

const productmodel=model('e-product',productSchema)

export default productmodel