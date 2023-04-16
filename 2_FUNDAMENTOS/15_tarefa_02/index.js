const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
.prompt([
    {name:'nome', message:'qual o seu nome?'},
    {name:'idade', message:'qual a sua idade?'},
])
.then((answers) => {

    if(answers.nome || !answers.idade) {
        throw new Error("O nome e a idade são obrigatorios!")
    }

   const response = `o nome do usuario e ${answers.nome} e ele tem ${answers.idade}`

    console.log(chalk.bgYellow.black(response))
})
.catch((err) => console.log(err))
