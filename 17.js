const somarNumeros = array => array.reduce((soma, proximo) => soma + proximo)

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))
