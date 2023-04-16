const express = require ("express") // invoacando o express
const exphbs = require("express-handlebars") // invocando o express-handlebars
const mysql = require ("mysql") //chamando o pacote mysql

const app = express() // executando o express na variavel app

app.engine('handlebars', exphbs.engine()) // engine do handlebars
app.set('view engine','handlebars')// colocando a view engine como handlebars / aqui estamos configurando o template engine da nossa aplicaçao

app.use(express.static('public'))// aqui estou deixando uma ponte para meus arquivos estaticos em public que teremos nosso css lá

app.get('/',(req,res) => { // rota 1 ( home )
    res.render("home")
}) 

const conn = mysql.createConnection({ // iniciando a conexão
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql1',
})

conn.connect(function(err){
   
    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySql!')
    
    app.listen(5000)
})