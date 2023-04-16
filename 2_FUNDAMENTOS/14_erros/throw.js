const x = 10

//checar se x é um inteiro

if(!Number.isInteger(x)) {
    throw new Error("o valor de x nao é um valor inteiro!")
}


console.log('Continuando o codigo...')