const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    SavedHero: sequelize.define('SavedHero', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    })
}