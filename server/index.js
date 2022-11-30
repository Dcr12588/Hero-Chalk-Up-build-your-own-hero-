require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { SERVER_PORT } = process.env
const { sequelize } = require('./util/database')
const { User } = require('./models/user')
const { Hero } = require('./models/Hero')
const { AbilityBuild } = require('./models/AbilityBuild')
const { SavedHero } = require('./models/SavedHero')

const app = express()

app.use(express.json())
app.use(cors())

User.hasMany(Hero)
Hero.belongsTo(User)

Hero.hasMany(AbilityBuild)
AbilityBuild.belongsTo(Hero)

User.hasMany(SavedHero)
Hero.hasMany(SavedHero)
SavedHero.belongsTo(User)
SavedHero.belongsTo(Hero)

const {register, login} = require('./controllers/authCtrl')
const {isAuthenticated} = require('./middleware/isAuthorized')
const {addHero, editHero, getAllHeros, addToMyHeros, getMyHeros, deleteHero} = require('./controllers/HerosCtrl')

//user endpoints
app.post('/register', register)
app.post('/login', login)

app.post('/Heros/:userId',isAuthenticated, addHero)
app.put('/Heros/:id',isAuthenticated, editHero)
app.get('/Heros',isAuthenticated, getAllHeros)

app.post('/myHeros',isAuthenticated, addToMyHeros)
app.get('/myHeros/:userId',isAuthenticated, getMyHeros)
app.delete('/myHeros/:userId',isAuthenticated, deleteHero)

// This will reset and reseed your db ===>{force: true}
sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, console.log(`We are live in soul society ${SERVER_PORT}!`))
})
.catch(err => console.log(err))
    