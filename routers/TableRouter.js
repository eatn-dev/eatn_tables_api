const router = require("express").Router()
const db = require("../sequelizeConnection")
const { createTableValidator, getTableByIdValidator, updateTableValidator, deleteTableValidator } = require("./validators")

router.post("/", createTableValidator, async (req, res) => {
    const { chairAmt } = req.body
    
    let table
    try {
        table = await db.Table.create({
            chairAmt: chairAmt
        })
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    return res.json(
        {
            data: {
                message: "Table successfully created.",
                returning: {
                    tableId: table.id
                }
            }
        }
    )
})

router.get("/", async (req, res) => {
    let tables
    try {
        tables = await db.Table.findAll()
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    return res.json({ data: tables})
})

router.get("/:id", getTableByIdValidator, async (req, res) => {
    const id = req.params.id

    let table
    try{
        table = await db.Table.findOne({
            where: {
                id: id
            }
        })
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    if (!table)
        return res.sendStatus(404)

    return res.json({ data: table })
})

router.put("/:id", updateTableValidator, async (req, res) => {
    const id = req.params.id
    const { chairAmt } = req.body

    let returning
    try {
        returning = await db.Table.update(
            {
                id: id,
                chairAmt: chairAmt
            },
            {
                where: {
                    id: id
                }
            }
        )
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    if (returning[0] !== 1)
        return res.sendStatus(404)

    return res.json(
        {
            data: { 
                message: "Table successfully updated."
            }
        }
    )
})

router.delete("/:id", deleteTableValidator, async (req, res) => {
    const id = req.params.id

    let returning
    try {
        returning = await db.Table.destroy({
            where: {
                id: id
            }
        })
    } catch (err) {
        console.log(err)
        return res.sendStatus(500)
    }

    if (returning !== 1)
        return res.sendStatus(404)

    return res.json(
        { 
            data: {
                message: "Table successfully deleted." 
            }
        }
    )
})

module.exports = router
