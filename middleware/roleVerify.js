import usermodel from "../schema/user-Db.js"

const roleVerify=async(req,res,next)=>{
    const {_id}=req

    if(!_id) return res.status(409).json({message:'Usuario no autorizado'})

    const {role}=await usermodel.findById(_id).populate('role')
    
    const verify=role.some(rol=>rol.name=='admin')

    if(!verify)return res.status(409).json({message:'Usuario no autorizado'})

    next()
}

export default roleVerify