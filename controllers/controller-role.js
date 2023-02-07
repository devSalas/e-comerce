import rolemodel from '../schema/rol-Db.js'
import usermodel from '../schema/user-Db.js'

const controllerRole=async(req,res)=>{

    const {_id,role}=req.body

    const user = await usermodel.findById(_id).exec()   

    if(!user) return res.status(403).json({message:'El usuario no existe'})

    const newRole= await rolemodel.findOne({name:role}).exec()
    
    if(!newRole) return res.status(403).json({message:'No esxiste el rol deseado'})

    user.role = [...user.role,newRole._id]

    await user.save()
    
    res.end('rol agregado')
}



export default controllerRole






  
