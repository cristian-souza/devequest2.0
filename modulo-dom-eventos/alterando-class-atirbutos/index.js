const quadrado = document.querySelector('.quadrado');

quadrado.classList.remove('azul');
quadrado.classList.add('black');

quadrado.classList.toggle('black'); // Adiciona se não tiver, remove se tiver
quadrado.classList.toggle("black"); 

const hasBlue = quadrado.classList.contains('azul'); // Verifica se o elemento possui a classe 'azul'

if (hasBlue) {
    console.log("quadrado tem a classe azul");
} else {
    console.log("quadrado não tem a classe azul");
}

// mexendo com atributos do elemntos do HTML

// setAttribute - define um atributo 
// getAttribute - obtém o valor de um atributo
// removeAttribute - remove um atributo

const inputCor = document.getElementById('cor');
inputCor.setAttribute("placeholder", "Digite uma cor...");

const valorPlaceholder = inputCor.getAttribute("placeholder");

inputCor.removeAttribute("placeholder");