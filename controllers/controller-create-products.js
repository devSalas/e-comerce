import productmodel from '../schema/product-Db.js'

const controllerCreateProduct=async(req,res)=>{
    
    const {_id,title,price,description,category,image_url,stock}=req.body

    if(_id||title||image_url) return res.status(403).json({message:'El producto ya existe'})

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