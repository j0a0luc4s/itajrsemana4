const exp10 = x => Math.pow(10, x)
const filtrarPorQuantidadeDeDigitos = (array, n) => array.filter(proximo => exp10(n - 1) <= proximo && proximo <= exp10(n))

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))