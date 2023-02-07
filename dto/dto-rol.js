import Ajv from "ajv"


const rolSchema={
    type:'object',
    properties:{
        _id:{type:'string'},
        role:{type:'string'}
    },
    required:['_id','role'],
    additionalProperties:false
}

const ajv=new Ajv({allErrors:true})

const validate=ajv.compile(rolSchema)

const roleValidate=(req,res,next)=>{

    const yesno=validate(req.body)

    if(!yesno)return res.status(404).send({message:validate.errors.map(error=>error.message)})

    next()
}

export default roleValidate