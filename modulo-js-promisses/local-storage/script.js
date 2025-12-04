localStorage.setItem("name", "João Silva");
localStorage.setItem("age", "30");

const usuario = {
    name: "Maria Souza",
    age: 28,
    profession: "Desenvolvedora Web",
};

localStorage.setItem("usuario", JSON.stringify(usuario));

const produtos = [
    { id: 1, nome: "Produto 1", preco: 90 },
    { id: 2, nome: "Produto 2", preco: 60 },
    { id: 3, nome: "Produto 3", preco: 80 },
    { id: 4, nome: "Produto 4", preco: 120 },
    { id: 5, nome: "Produto 5", preco: 150 },
];

localStorage.setItem("produtos", JSON.stringify(produtos));

const userName = localStorage.getItem("name")
console.log(userName)

const usuarioJson = localStorage.getItem("usuario")
console.log(JSON.parse(usuarioJson))

const produtosJson = localStorage.getItem("produtos")
const produtosArray = JSON.parse(produtosJson)
console.log(produtosArray)

localStorage.removeItem("name")

localStorage.clear()