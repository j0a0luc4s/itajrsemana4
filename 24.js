const contarCaractere = (char, string) => string.split('').reduce((quantidade, proximo) => proximo === char ? quantidade + 1 : quantidade, 0)

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))