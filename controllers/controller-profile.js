import usermodel from '../schema/schema.js'

const controllerprofile=async(req,res)=>{

    const {_id}=req.cookies

    const user = await usermodel.findById(_id).exec()   

    if(!user) return res.status(404).json({message:'No estas logeado'})
    
    res.json(user)
}



export default controllerprofile






  
