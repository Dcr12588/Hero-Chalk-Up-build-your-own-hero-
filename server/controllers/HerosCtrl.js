const { Hero } = require('../models/Hero')
const { User } = require('../models/user')

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
                PowerSupply, CombatAbility, SpecialAbility} = req.body

            await Hero.update({
                Strength, Speed, IQ,
                Durability, Skill, Weapon,
                PowerSupply, CombatAbility, SpecialAbility
            }, { where: { id: +User } })

            res.sendStatus(200)

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    getAllHeros: async (req,res) => {
        try {
           const heros = await Hero.findAll()
           res.status(200).send(heros)
        } catch(err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}
