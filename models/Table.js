module.exports = (sequelize, DataTypes) => {
    const Table = sequelize.define("Table", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        chairAmt: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true,
        tableName: "tables",
    })

    return Table
}
