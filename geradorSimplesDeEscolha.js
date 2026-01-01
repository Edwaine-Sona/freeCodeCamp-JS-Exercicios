const escolha1 = "Primeira escolha"
const escolha2 = "Segunda escolha"
const escolha3 = "Terceira escolha"
const escolha4 = "Quarta escolha"
const escolha5 = "Quinta escolha"

// Gerando um número aleatório
let numeroAleatorio = Math.round(Math.random() * (5 - 1) + 1)

let escolhaSelecionada

// Estrutura de selecção
switch (numeroAleatorio) {
  case 1:
  escolhaSelecionada = escolha1
  break
  case 2:
  escolhaSelecionada = escolha2
  break
  case 3:
  escolhaSelecionada = escolha3
  break
  case 4:
  escolhaSelecionada = escolha4
  break
  case 5:
  escolhaSelecionada = escolha5
  break
  default:
  escolhaSelecionada = "Erro: Número fora do intervalo (0 - 5)"
}

console.log(`Número sorteado: ${numeroAleatorio}`)
console.log(`Escolha selecionada: ${escolhaSelecionada}`)
