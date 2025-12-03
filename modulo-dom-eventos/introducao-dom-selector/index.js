// getelementbyid - busca um elemento pelo ID
const button = document.getElementById('button');
console.log(button);

// getelementsbyclassname - busca elementos pela CLASS
const h1 = document.getElementsByClassName('title');
console.log(h1);

// querySelector - busca o primeiro elemento que corresponde ao seletor CSS
const p = document.querySelector('.paragrafo');
p.textContent = "Novo texto para o parágrafo.";