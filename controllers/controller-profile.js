import usermodel from '../schema/user-Db.js'

const controllerprofile=async(req,res)=>{

    const {_id}=req
    
    const user = await usermodel.findById(_id).exec()   

    if(!user) return res.status(404).json({message:'No estas logeado'})

    const {name,email,password}=user

    res.json({name,email})
}



export default controllerprofile






  
