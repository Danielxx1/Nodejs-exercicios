const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))


//formar path
const midfolder ='realatorios'
const fileName = 'daniel.txt'

const finalPath = path.join('/', 'arquivos', midfolder,fileName)

console.log(finalPath)