import Ajv from "ajv"
import addFormat from 'ajv-formats'

const dtoPayment = {
    type: 'object',
    properties: {
        totalPrice: { type: 'number'},
        Products: { type: 'array'},
    },
    required: ['totalPrice', 'Products'],
    additionalProperties: false
}

const ajv = new Ajv({ allErrors: true })
/* addFormat(ajv,["email"]) */

const validate = ajv.compile(dtoPayment)

const PaymentValidate = (req, res, next) => {
  
  const {totalPrice,Products} = req.body
  console.log({totalPrice,Products})

    const yesno = validate(req.body)

    if (!yesno) return res.status(403).send({ message: validate.errors.map(error => error.message) })
    
   if(Products.length === 0 || totalPrice === 0) return  res.status(403).send({ message:"no hay productos"})

    next()  
}

 
export default PaymentValidate

