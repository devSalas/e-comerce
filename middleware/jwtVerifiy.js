import jwt from 'jsonwebtoken'
import jwtmodel from '../schema/jwt.-Db.js'

const jwtVerify=async (req,res,next)=>{
    const {token}=req.cookies

    if(!token) return res.status(409).json({message:'Error de autenticacion'})

    const {_id}=await jwt.verify(token,process.env.SECRET_JWT)

    const bolean=await jwtmodel.findOne({userId:_id}).exec()

    if (bolean.status=='false') return res.status(409).json({message:'Error de autenticacion'})

    req._id=_id 
    next()
}

export default jwtVerify