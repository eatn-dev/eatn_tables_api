const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

const TableRouter = require("./routers/TableRouter")

app.use("/tables", TableRouter)

module.exports = app
