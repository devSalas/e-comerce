import usermodel from '../schema/user-Db.js'

const controllerFavorite=async(req,res)=>{

    const {_id}=req

    const user= await usermodel.findById(_id)
    
    if(!user) return res.status(409).json({message:'Usuario no autorizado'})

    const {favorite}= await usermodel.findById(_id).populate('favorite')

    res.json({favorite})
}



export default controllerFavorite