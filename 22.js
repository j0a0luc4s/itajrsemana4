function funcaoDaSorte(x) {
  random = Math.floor(Math.random() * 10) + 1
  if (x === random)
    return `Parabéns! O número sorteado foi o ${random}`
  return `Que pena! O número sorteado foi o ${random}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))