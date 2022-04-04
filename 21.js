const menorNumero = array => array.reduce((menor, proximo) => menor <= proximo ? menor : proximo)

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))
