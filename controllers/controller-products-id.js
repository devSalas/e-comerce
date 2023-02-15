import productmodel from '../schema/product-Db.js'

const controllerProductID=async(req,res)=>{
    
    const {id}=req.params
    
    
    const product=await productmodel.findById(id).exec()

    console.log(product)
    
    if(!product) return res.status(404).json({message:'Not Found'})

    if(!product) return res.status(404).json({message:'Not Found'})

    res.json({product})

}

export default controllerProductID