import chalk from "chalk"
import inquirer from "inquirer"


inquirer
.prompt([
    {name:'nome', message:'qual o seu nome?'},
    {name:'idade', message:'qual a sua idade?'},
])
.then((answers) => {
   const response = `o nome do usuario e ${answers.nome} e ele tem ${answers.idade} anos`

    console.log(chalk.bgYellow.black(response))
})
.catch((err) => console.log(err))

// usei um video no youtub para ver como usar o chalk com as versoes mais novas usando o import tradicional   o nome do video que eu vi foi : Você Precisa Conhecer o Chalk: Aprenda Como Personalizar seu Terminal de Forma Simples 