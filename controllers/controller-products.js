import productmodel from '../schema/product-Db.js'

const controllerProduct=async(req,res)=>{
    
    const {page}=req.query
    
    if(page){
        
        const products=await productmodel.find().skip(((page-1)*20)).limit((page*20)).exec()
        
        if(products.length==0) return res.status(403).json({message:'Not Found products'})
    
        return res.json({page,cantidad:products.length,products})
    } 

    const products = await productmodel.find().exec()
    
    res.json({products})
    
}

export default controllerProduct