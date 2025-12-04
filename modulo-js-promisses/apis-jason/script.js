const heroObject = {
    name: "Homem de ferro",
    age: 48,
    hasPowers: false
}

console.log(heroObject.name);
console.log(typeof heroObject);

// isso é um json

const heroJSON = `{
    "name":"Homem de ferro",
    "age": 48,
    "hasPowers": false
}`

// Transformar JSON em objeto
const hero= JSON.parse(heroJSON);
console.log(hero.name)


// Transformar objeto em string
const heroString = JSON.stringify(heroObject);
console.log(heroString)