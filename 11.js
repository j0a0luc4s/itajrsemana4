function receberPrimeiroEUltimoElemento(array) {
  return [array[0], array[array.length - 1]]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'Olá']))
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]))