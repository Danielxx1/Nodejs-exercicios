const minimist = require("minimist") //importando o minimist

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']

console.log (nome, profissao)
console.log(`meu nome é ${nome} e eu sou ${profissao}`)