const formBusca = document.getElementById('form-busca');
const input = document.getElementById('nome');
const button = document.getElementById('btn');

button.addEventListener("click", () => {
    const nome = input.value;
    console.log("Clicou")
});

input.addEventListener("input", () => {
    // console.log("Digitou")

    const value = input.value;
    // console.log(value)
});

formBusca.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = input.value;
    console.log("Formulário enviado");
    console.log(nome);
});