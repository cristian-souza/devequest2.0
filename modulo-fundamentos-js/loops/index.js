for(let i = 0; i <= 5; i++) {
   console.log(`Incrementando a variável i: ${i}`)
}

let a = 0
let b = 10

while(a < b) {
   console.log(`Incrementando a variável a: ${a}`)
   a++
}

let i = 0

do {
   console.log(`Incrementando a variável i: ${i}`)
   i++
} while (i <= 5)

let entrada;

while (entrada !== "sair") {
 entrada = prompt("Digite algo (ou 'sair' para encerrar):");
 console.log("Você digitou:", entrada);
}

let opcao;
do {
 opcao = prompt("Escolha uma opção (1, 2, 3 ou 0 para sair):");
 console.log("Opção escolhida:", opcao);
} while (opcao !== "0");

for (let i = 0; i < 10; i++) {
 console.log("Número:", i);
}