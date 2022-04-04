function eVogal(letra) {
  switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    return false
    default:
      return true
  }
}
const removerVogais = string => string.split('').filter(eVogal).join('')

console.log(removerVogais('cod3r'))
console.log(removerVogais('Fundamentos'))