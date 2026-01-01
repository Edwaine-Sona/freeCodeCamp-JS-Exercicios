// Este exercício conciste em criar uma função que mascara um email.

let email = "myemail@email.com"

const maskEmail = (email) => {
    // Achando o índice do "@" para dividir o nome o usuario do dominio 
  let indiceArroba = email.indexOf("@")
  //Repartindo o nome do usuario pelas letras que devem ser mantidas(primeia e última) e as que devem ser mascaradas ou ocultadas
  let nomeUsuario = email.slice(0, indiceArroba)
  let primeiraLetra = nomeUsuario[0]
  let ultimaLetra = nomeUsuario[nomeUsuario.length -1]
  let letraDoMeio = nomeUsuario.substring(1, nomeUsuario.length -1)
  // Mascarando as letras do meio do nome do usuario
  let mascararMeio = "*".repeat(letraDoMeio.length)
    // Juntando o nome do usuario mascarado e o dominio
  let nomeMascarado = primeiraLetra + mascararMeio + ultimaLetra
  let dominio = email.slice(indiceArroba)
  return nomeMascarado + dominio
}

// Imprimindo os emails mascarados na tela
console.log(maskEmail(email))
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))