import Ajv from "ajv"

const dtoProducts = {
    type: 'object',
    properties: {
        _id:{type:'string'},
        title:{type:'string'},
        price: { type: 'number'},
        description: { type: 'string'},
        category: { type: 'string'},
        image_url: { type: 'string'},
        stock:{type:'number'}
    },
    required: ['_id', 'title','price','description','category','image_url','stock'],
    additionalProperties: false
}

const ajv = new Ajv({ allErrors: true })

const validate = ajv.compile(dtoProducts)

const createProductsValidate = (req, res, next) => {
    const yesno = validate(req.body)

    if (!yesno) return res.status(403).send({ message: validate.errors.map(error => error.message) })

    next()
}

export default createProductsValidate