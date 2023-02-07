import productmodel from '../schema/product-Db.js'

const controllerCreateProduct=async(req,res)=>{
    
    const {_id,title,price,description,category,image_url,stock}=req.body

    const product=await productmodel.findOne({title}).exec()

    if(product) return res.status(403).json({message:'El producto ya existe'})

    const newproduct=new productmodel({
        _id,
        title,
        price,
        description,
        category,
        image_url,
        stock
    })

    await newproduct.save()

    res.json({message:'producto creado'})
}



export default controllerCreateProduct