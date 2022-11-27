const {DataTypes} = require('sequelize')

const {sequelize} = require('../util/database')

module.exports = {
    Hero: sequelize.define('Hero', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Strength: DataTypes.STRING,
        Speed: DataTypes.STRING,  
        IQ: DataTypes.STRING,  
        Durability: DataTypes.STRING,  
        Skill: DataTypes.STRING,  
        Weapon: DataTypes.STRING,  
        PowerSupply: DataTypes.STRING,  
        CombatAbility: DataTypes.STRING,  
        SpecialAbility: DataTypes.STRING,   
    })
}