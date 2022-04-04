function inverso(x) {
  if (typeof x == 'boolean')
    return !x
  else if (typeof x == 'number')
    return -x
  else
    return `booleano ou números esperado, mas o parâmetro é do tipo ${typeof x}`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))