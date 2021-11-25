/** Exercício 3
 Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
 Resp.:
*/

export const calculateSumTo = (n: number): number => {
  var sum = 0
  for (var i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}

// Exemplos de uso:
console.log(calculateSumTo(3))
console.log(calculateSumTo(10))
console.log(calculateSumTo(100))
