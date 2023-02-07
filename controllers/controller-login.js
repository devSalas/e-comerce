import usermodel from '../schema/user-Db.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import jwtmodel from '../schema/jwt.-Db.js'

const controllerlogin=async(req,res)=>{

    const {email,password}=req.body

    const user = await usermodel.findOne({email}).exec()   

    if(!user) return res.status(403).json({message:'Email o contraseña incorrecta'})

    const verifyPassword= await compare(password,user.password)

    if(!verifyPassword) return res.status(403).json({message:"Email o contraseña incorrecta"})

    const token=await jwt.sign({_id:user._id},process.env.SECRET_JWT,{algorithm:'HS256',expiresIn:'1h'})

    const verifytoken=await jwtmodel.findOne({userId:user._id}).exec()

    if (verifytoken) {
        
        verifytoken.status=true
        verifytoken.jwt=token

        res.cookie('token',token,{maxAge:36000000,httponly:true})
        return res.end(token)
    }

    const newtoken=new jwtmodel({
        jwt:token,
        status:true,
        userId:user._id
    })

    newtoken.save()
    
    res.cookie('token',token,{maxAge:36000000,httponly:true})
    res.end(token)
}



export default controllerlogin