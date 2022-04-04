function inverter(objeto) {
  let result = {}
  for (let i in objeto)
    result[objeto[i]] = i
  return result
}

console.log(inverter({a: 1, b: 2, c: 3}))