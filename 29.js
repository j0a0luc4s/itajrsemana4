const segundoMaior = array => array.sort((a, b) => a - b)[array.length - 2]

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))