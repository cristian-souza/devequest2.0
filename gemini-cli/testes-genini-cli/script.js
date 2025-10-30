
// Exemplo de função de validação de formulário

function validateForm() {
  // Pega os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;

  // Verifica se os campos estão vazios
  if (nome == "" || email == "") {
    alert("Todos os campos devem ser preenchidos");
    return false;
  }

  // Verifica se o email tem um formato válido (exemplo simples)
  var emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido");
    return false;
  }

  // Se tudo estiver correto
  alert("Formulário enviado com sucesso!");
  return true;
}
