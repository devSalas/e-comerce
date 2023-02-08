import Ajv from "ajv"
import addFormat from 'ajv-formats'

const dtoRegister = {
    type: 'object',
    properties: {
        name:{type:'string', minLength:3,maxLength:15},
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength:8},
        role:{type:"string"}
    },
    required: ['email', 'password','name'],
    additionalProperties: false
}

const ajv = new Ajv({ allErrors: true })
addFormat(ajv,["email"])

const validate = ajv.compile(dtoRegister)

const registerValidate = (req, res, next) => {
    const yesno = validate(req.body)

    if (!yesno) return res.status(403).send({ message: validate.errors.map(error => error.message) })
    
    next()
}

export default registerValidate