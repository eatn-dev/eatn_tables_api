const Validator = require("validatorjs")

const createTableValidator = (req, res, next) => {
    const createTableFormat = {
        chairAmt: "required|integer|min:1"
    }

    const { chairAmt } = req.body

    const validation = new Validator(
        { chairAmt },
        createTableFormat
    )

    if (validation.fails())
        return res.status(400).send({ data: validation.errors })

    return next()
}

const getTableByIdValidator = (req, res, next) => {
    const getTableByIdFormat = {
        id: "required|integer"
    }

    const id = req.params.id

    const validation = new Validator(
        { id },
        getTableByIdFormat
    )

    if (validation.fails())
        return res.status(400).send({ data: validation.errors })

    return next()
}

const updateTableValidator = (req, res, next) => {
    const updateTableFormat = {
        id: "required|integer",
        chairAmt: "required|integer|min:1"
    }

    const id = req.params.id
    const { chairAmt } = req.body

    const validation = new Validator(
        { id, chairAmt },
        updateTableFormat
    )

    if (validation.fails())
        return res.status(400).send({ data: validation.errors })

    return next()
}

const deleteTableValidator = (req, res, next) => {
    const deleteTableFormat = {
        id: "required|integer"
    }

    const id = req.params.id

    const validation = new Validator(
        { id },
        deleteTableFormat
    )

    if (validation.fails())
        return res.status(400).send({ data: validation.errors })

    return next()
}



module.exports =  {
    createTableValidator,
    getTableByIdValidator,
    updateTableValidator,
    deleteTableValidator
}
