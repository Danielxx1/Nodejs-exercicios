const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard', (req, res) => {
    res.render("dashboard")
})

app.get('/', (req,res) => {

    const user = {
        name: "Daniel",
        surname: "cabral",
        age: "28"
    }

    const palavra = "teste"

    const auth = true
 
    res.render('home', {user: user, palavra, auth})
})

app.listen(4000, () =>{
    console.log('App rondando!')
} )