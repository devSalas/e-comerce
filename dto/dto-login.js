import Ajv from "ajv"
import addFormat from 'ajv-formats'

const dtoLogin = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 8 },
    },
    required: ['email', 'password'],
    additionalProperties: false
}

const ajv = new Ajv({ allErrors: true })
addFormat(ajv,["email"])

const validate = ajv.compile(dtoLogin)

const loginValidate = (req, res, next) => {
    const yesno = validate(req.body)

    if (!yesno) return res.status(403).send({ message: validate.errors.map(error => error.message) })

    next()
}

export default loginValidate