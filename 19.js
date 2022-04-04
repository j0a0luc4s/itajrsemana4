function calcularMedia(array) {
  let result = 0
  for (let i in array)
    result += array[i]
  return result / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))