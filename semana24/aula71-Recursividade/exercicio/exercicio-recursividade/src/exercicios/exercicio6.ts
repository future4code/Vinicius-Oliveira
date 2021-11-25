/** Exercício 6
 Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos.
 Resp.:
*/

export const getArrayMaximum = (
  arr: number[],
  i: number = 0,
  largest: number = 0
): number => {
  let largestAux = largest
  if (arr[i] > largest) {
    largestAux = arr[i]
  }
  if (i === arr.length - 1) {
    return largestAux
  }

  return getArrayMaximum(arr, i + 1, largestAux)
}

//Exemplos de uso
console.log(getArrayMaximum([2, 10, 8, 5, 4]))
