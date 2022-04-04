const buscarPalavrasSemelhantes = (chave, array) => array.filter(elemento => elemento.search(chave) !== -1)

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))