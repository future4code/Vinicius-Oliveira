/** Exercício 5
 Escreva uma função recursiva que determine a quantidade de digitos de um número.
 Resp.:
*/

export const getNumDigits = (num: number, acc: number = 1): number => {
  if (num < 10) {
    return acc
  }
  return getNumDigits(num / 10, acc + 1)
}

// Exemplos de uso
console.log(getNumDigits(0))
console.log(getNumDigits(10))
console.log(getNumDigits(2034))
