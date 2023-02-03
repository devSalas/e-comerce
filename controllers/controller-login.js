import usermodel from '../schema/schema.js'

const controllerlogin=async(req,res)=>{

    const {email,password}=req.body

    const user = await usermodel.findOne({email}).exec()   

    if(!user) return res.status(404).json({message:'Email o contraseña incorrecta'})

    const check=user.password==password?true:false

    if(!check) return res.status(404).json({message:"Email o contraseña incorrecta"})

    res.cookie('_id',user._id,{maxAge:60000,httponly:true})
    res.end()
}



export default controllerlogin






  
