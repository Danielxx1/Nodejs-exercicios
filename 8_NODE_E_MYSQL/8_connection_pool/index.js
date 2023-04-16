const express = require ("express") // invoacando o express
const exphbs = require("express-handlebars") // invocando o express-handlebars
const poo = require('./db/conn')

const app = express() // executando o express na variavel app

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

app.engine('handlebars', exphbs.engine()) // engine do handlebars
app.set('view engine','handlebars')// colocando a view engine como handlebars / aqui estamos configurando o template engine da nossa aplicaçao

app.use(express.static('public'))// aqui estou deixando uma ponte para meus arquivos estaticos em public que teremos nosso css lá

app.get('/',(req,res) => { // rota 1 ( home )
    res.render("home")
}) 

app.post('/books/insertbook',(req,res)  => {

    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`

    poo.query(sql, function(err){
        if(err) {
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.get('/books',(req, res) => {
    const sql = "SELECT * FROM books"

    poo.query(sql, function(err,data){
        
        if(err) {
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books',{ books })
    })
})

app.get('/books/:id', (req , res) =>{

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    poo.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
    
        res.render('book', { book })
    })

})

app.get('/books/edit/:id', (req, res) =>{

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    poo.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]
    
        res.render('editbook', { book })
    })

})

app.post('/books/updatebook', (req, res) => {

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id} `

    poo.query(sql, function (err) {
        if(err) {
            console.log(err)
            return
        }
        
        res.redirect('/books')
    })
})

app.post('/books/remove/:id',(req, res) => {

    const id = req.params.id

    const sql = `DELETE FROM books WHERE id = ${id}`

    poo.query(sql, function (err) {

        if(err) {
            console.log(err)
            return
        }
        
        res.redirect('/books')
    })
})

app.listen(5000)