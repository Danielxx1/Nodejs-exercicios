const express = require('express')
const { listen } = require('express/lib/application')
const app = express()
const port = 3000 // variavel ambiente

app.get('/',(req, res) => {
    res.send('ola mundo!')
})

app.listen(port,() => {
    console.log(`app rodando na port${port}`)
})