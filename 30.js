function receberMelhorEstudante(objeto) {
  let maiorMedia = 0
  let nomeMaiorMedia
  for (let nome in objeto) {
    soma = objeto[nome].reduce((soma, proximo) => soma + proximo)
    media = soma / objeto[nome].length
    if (media > maiorMedia) {
      maiorMedia = media
      nomeMaiorMedia = nome
    }
  }
  return {nome: nomeMaiorMedia, media: maiorMedia}
}

console.log(receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], 
  Mariana: [9, 6.6, 7.9, 8], 
  Carla: [7, 7, 8, 9]
}))