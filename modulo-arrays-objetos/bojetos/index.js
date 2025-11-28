const pessoa = {
    nome: "Ricardo",
    sobrenome: "Dias",
    idade: 34,
    address: {
        rua: "Rua teste",
        numero: 90,
        bairro: "Bairro XPTO",
    },
};

user["firstName"] = "Roberto";

console.log(user);

const produtos = [
    { id: 1, nome: "Produto 1", preco: 80 },
    { id: 2, nome: "Produto 2", preco: 120 },
    { id: 3, nome: "Produto 3", preco: 60 },
    { id: 4, nome: "Produto 4", preco: 100 },
    { id: 5, nome: "Produto 5", preco: 150 },
];

produtos.forEach((item) => {
    console.log(item.id, item.nome, item.preco);
});
