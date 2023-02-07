import productmodel from '../schema/product-Db.js'

const controllerProductID=async(req,res)=>{
    
    const {id}=req.params
    
    if(typeof(id)!=='number' || countParams.length>1) return res.status(404).json({message:'Not Found'})
    
    const product=await productmodel.findById(id).exec()

    if(!product) return res.status(404).json({message:'Not Found'})

    res.json({product})

}

export default controllerProductID