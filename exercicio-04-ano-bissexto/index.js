let ano = 1900

const eBissexto = ano => {
  if (ano % 4 === 0){
    if (ano % 100 === 0){
      if (ano % 400 === 0){
        return `${ano} é um ano bissexto.`
      }
      else{
        return `${ano} não é um ano bissexto.`
      }
    }
    else{
      return `${ano} é um ano bissexto.`
    }
  }
  else{
    return `${ano} não é um ano bissexto.`
  }
}
let resultado = eBissexto(ano)
console.log(resultado)


