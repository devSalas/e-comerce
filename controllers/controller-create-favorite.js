import usermodel from '../schema/user-Db.js'
import productmodel from '../schema/product-Db.js'

const controllerCreateFavorite=async(req,res)=>{

    const {_id}=req
    const {favorite}=req.body

    const user= await usermodel.findById(_id).exec()

    if(!user) return res.status(409).json({message:'Uusuario no autorizado'})

    const product = await productmodel.findOne({name:favorite}).exec()   

    if(!product) return res.status(403).json({message:'El product no existe'})

    user.favorite=[...favorite,product._id]

    await user.save()

    res.json({message:'Producto agregado'})
    
}



export default controllerCreateFavorite