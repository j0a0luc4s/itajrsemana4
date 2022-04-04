function estaEntre(numero, minimo, maximo, inclusivo = false) {
  if (minimo < numero && numero < maximo)
    return true
  if (inclusivo && (numero === minimo || numero === maximo))
    return true
  return false
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))