const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contenty-Type','text/html')
    res.end('<p>Olá, este é meu primeiro server com HTML!</p><h1>teste</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})