function removerPropriedade(objeto, propriedade)
{
  let result = Object.assign({}, objeto)
  delete result[propriedade]
  return result
}

console.log(removerPropriedade({a: 1, b: 2}, 'a'))
console.log(removerPropriedade({
  id: 20, 
  nome: 'caneta', 
  descricao: 'Não preenchido'
}, 'descricao'))
