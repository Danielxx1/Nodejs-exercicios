const inquirer = require('inquirer')

inquirer.prompt([
{
    name: 'p1', 
    message:'qual a primeira nota?',
},
{
    name:'p2',
    message:'qual a segunda nota?',
},
])
.then((answers) => {
    console.log(answers)
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)
    console.log(`A média é ${media}`)
})
.catch((err) => console.log(err))