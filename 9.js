function repetir(elemento, numero) {
  let result = [];
  for (let i = 0; i < numero; i++)
    result.push(elemento)
  return result
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))