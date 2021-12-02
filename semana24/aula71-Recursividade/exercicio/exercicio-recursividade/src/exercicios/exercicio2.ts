/** Exercício 2
 Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
 Resp.:
*/

export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc
  }
  return calculateSumTo(n - 1, acc + n)
}

// Exemplos de uso:
console.log(calculateSumTo(3))
console.log(calculateSumTo(10))
console.log(calculateSumTo(100))
