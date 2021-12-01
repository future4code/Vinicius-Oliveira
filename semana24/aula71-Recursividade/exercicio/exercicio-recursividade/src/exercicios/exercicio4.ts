/** Exercício 4
 Escreva uma função recursiva que consiga imprimir todos os elementos de um array.
 Resp.:
*/

export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1)
    console.log(`Elemento ${i}: `, arr[i])
  }
}

// Exemplo de uso:
const array = [1, 2, 3, 4]
printArray(array)
