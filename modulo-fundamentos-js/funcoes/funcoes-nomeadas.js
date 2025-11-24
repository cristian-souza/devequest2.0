// function saudacao(nome) {
//     console.log(`Seja bem vindo, ${nome}.`)
// }

// saudacao("Cristian")

// function soma(num1, num2) {
//     console.log(num1 + num2)
// }

// soma(4, 2)

function saudacao(nome) {
   console.log(`Seja bem vindo, ${nome}`)
}

saudacao('Ricardo')

function soma(num1, num2) {
   return num1 + num2
}

const resultado = soma(4, 2)
console.log(resultado)

function maiorDeIdade(idade) {
   return idade >= 18
}

console.log(maiorDeIdade(30))
console.log(maiorDeIdade(16))

function converterCelsiusParaFahrenheit() {
   return (celsius * 9/5) + 32
}

console.log(converterCelsiusParaFahrenheit(0))
console.log(converterCelsiusParaFahrenheit(25))