function multiplicar(a, b) {
  let result = 0
  for (let i = 0; i < a; i++)
    result += b
  return result
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))