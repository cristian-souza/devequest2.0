const filme = 'Homem aranha'

if (filme === 'Harry Potter') {
    console.log('É o filme do Harry Potter')
} else if (filme === 'Star wars') {
    console.log('É o filme do Star wars')
} else if (filme === 'Homem aranha') {
    console.log('É o filme do Homem aranha')
} else {
    console.log('É qualquer outro filme.')
}

// condicao ? valorSeVerdadeiro : valorSeFalso

const idade = 18

if (idade >= 18) {
    console.log('Você é maior de idade.')
} else {
    console.log('Você é menor de idade.')
}

idade >= 18 ? console.log("Você é maior de idade.") : console.log("Você é menor de idade.")
