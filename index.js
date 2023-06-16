const app = require("./app")
const sequelize = require("./sequelizeConnection").sequelize

sequelize.authenticate()
    .then(() => {
        console.log("Connected to menu items database successfully")
        console.log("Starting db synchronization")
        sequelize.sync().then(() => {
            console.log("Db synchronization successful")
            app.listen(5001, () => {
                console.log("Tables service listening on http://localhost:5001")
            })
        }).catch((err) => {
            console.log("Unable to sync the models with the database", err)
        })
    }).catch((err) => {
        console.log("Unable to connect to menu items database", err)
    })
