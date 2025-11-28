// filter - vai filtrar o array com base em uma condição

const products= [
    { id: 1, name: 'Notebook', price: 3000},
    { id: 2, name: 'Mouse', price: 20},
    { id: 3, name: 'Keyboard', price: 100},
    { id: 4, name: 'Monitor', price: 700},
    { id: 5, name: 'Tablet', price: 500},
];

const priceGreatThanOneHundred =products.filter(product => product.price > 100)

console.log(priceGreatThanOneHundred);