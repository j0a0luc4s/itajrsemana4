function receverSomenteOsParesDeIndicesPares(array) {
  let result = []
  for (let i = 0; i < array.length; i++)
    if (i % 2 == 0 && array[i] % 2 == 0)
      result.push(array[i])
  return result
}

console.log(receverSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receverSomenteOsParesDeIndicesPares([10, 70, 22, 43]))