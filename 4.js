function nomeDoMes(mes) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  return meses[mes - 1]

}
console.log(nomeDoMes(1))
console.log(nomeDoMes(4))