import jwt from 'jsonwebtoken'

const jwtVerify=async (req,res,next)=>{
    const {token}=req.cookies

    if(!token) return res.status(409).send({message:'Error de autenticacion'})

    const {_id}=await jwt.verify(token,process.env.SECRET_JWT)

    req._id=_id
    next()
}

export default jwtVerify