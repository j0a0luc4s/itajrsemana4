function simboloMais(numero) {
  let result = ""
  for (let i = 0; i < numero; i++)
    result = result + '+'
  return result
}

console.log(simboloMais(2))
console.log(simboloMais(4))