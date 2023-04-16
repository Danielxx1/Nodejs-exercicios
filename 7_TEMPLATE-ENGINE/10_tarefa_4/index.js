const express = require ('express') // aqui estou chamando o express e inserindo na variavel express
const exphbs = require ('express-handlebars') // aqui estou invocando o express-handlebars e inserindo na variavel exphbs
const app = express() // aqui estou inicializando o express e jogando na varial app
app.engine("handlebars", exphbs.engine())// aqui estou definindo configuraçoes do engine com o exphbs
app.set("view engine","handlebars")// aqui estou colocando a view engina com handlebars
app.use(express.static("public"))//aqui estou definindo os arquivos publics

const products = [ // array de objetos que sera reaproveitado para a tarefa simulando um banco de dados

    {
        id:"1",
        title: "livro",
        price: 12.99,
    },
    {
        id:"2",
        title: "cadeira",
        price: 200.99,
    },
    {
        id:"3",
        title: "lampada",
        price: 2.99,
    }
]

app.get("/",(req,res) => {  // aqui tenho a rota home , e estou mandando para a home o array de product criada acima
    res.render("home", {products})
})

app.get("/product/:id",(req,res) => {  // aqui estou criando uma rota (product) dinamica que esta acessando o indice do array (products) atraves do metodo req.params que recebe o parametro (id) e com isso conseguimos passar o produto especifico para a view
    const product = products[parseInt(req.params.id) - 1]
    
    res.render("product", {product})
})

app.listen(4000)