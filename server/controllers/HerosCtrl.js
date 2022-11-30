const { Hero } = require('../models/Hero')
const { User } = require('../models/user')
const { SavedHero } = require('../models/SavedHero')

module.exports = {
    addHero: async (req, res) => {
        try {
            const { Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility } = req.body

            const { userId } = req.params

            await Hero.create({
                Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility, userId
            })

            res.sendStatus(200)

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    editHero: async (req, res) => {
        try {
            const { Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility, HeroId } = req.body

            await Hero.update({
                Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility
            }, { where: { id: +HeroId } })

            res.sendStatus(200)

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    getAllHeros: async (req, res) => {
        try {
            const heros = await Hero.findAll()
            res.status(200).send(heros)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    addToMyHeros: async (req, res) => {
        try {
            const { userId, HeroId } = req.body
            await SavedHero.create({UserId: userId, HeroId})
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    getMyHeros: async (req, res) => {
        try {
            const {userId} = req.params
            const savedHeros = await SavedHero.findAll({
                where: { UserId: userId },
                include:[{ 
                    model: Hero,
                    require: true,
                    include: {
                        model: User,
                        require: true,
                        attributes: ["username"]
                }
            }]
            })
            res.status(200).send(savedHeros)
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    deleteHero: async (req, res) => {
        try {
            const { Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility, HeroId } = req.body

            await Hero.delete({
                Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility
            }, { where: { id: +HeroId } })

            res.sendStatus(200)

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
}
}
