// global
let idade = 45

// local

function apresentar() {
  let nome = "João"
  const cidade = "São Paulo"
  var profissao = "Desenvolvedor"
  
  console.log(nome, cidade, profissao)
  console.log(idade)

  if(idade > 18) {
    let podeDirigir = true
    console.log("Maior de idade")
    console.log(podeDirigir)
  } else {
    console.log("Menor de idade")
  }
}

apresentar()