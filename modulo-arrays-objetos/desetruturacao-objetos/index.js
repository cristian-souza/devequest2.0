// desestrutarção de objetos

const user = {
    name: 'Alice',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Wonderland',
        number: 42
    }
}

// const name = user.name
// const age = user.age
// const street = user.address.street
// const city = user.address.city
// const number = user.address.number

const { name, age, address: { street, city, number } } = user
console.log(name, age, street, city, number);

// forma tradicional
// const showAge = (user) => {
//     console.log(user.age)
// }

// showAge(user)

// desestruturando na passagem de parâmetro
const showAge = ({ name, age}) => {
    console.log(name, age)
}

showAge(user)