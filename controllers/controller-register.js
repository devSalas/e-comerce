import rolemodel from '../schema/rol-Db.js'
import usermodel from '../schema/user-Db.js'
import { hash } from 'bcrypt'

const controllerRegister=async(req,res)=>{

    const {name,email,password}=req.body

    const userName= await usermodel.findOne({name}).exec()   

    if(userName) return res.status(403).json({message:'Name existente'})
    
    const userEmail=await usermodel.findOne({email}).exec()
    
    if(userEmail) return res.status(403).json({message:'Email existente'})

    const rol =await rolemodel.findOne({name:'user'}).exec()
    
    const passwordHash=await hash(password,10)
    
    const newUser=new usermodel({
        name,
        email,
        password:passwordHash,
        role:rol._id,
    })

    await newUser.save()
    
    res.json({message:'Usuario creado'})
}



export default controllerRegister






  
