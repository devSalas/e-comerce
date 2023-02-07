import Ajv from "ajv"
import addFormat from 'ajv-formats'

const dtoFavorite = {
    type: 'object',
    properties: {
        favorite: { type: 'string'},
    },
    required: ['name'],
    additionalProperties: false
}

const ajv = new Ajv({ allErrors: true })

const validate = ajv.compile(dtoFavorite)

const favoriteValidate = (req, res, next) => {
    const yesno = validate(req.body)

    if (!yesno) return res.status(403).send({ message: validate.errors.map(error => error.message) })
    
    next()
}

export default favoriteValidate