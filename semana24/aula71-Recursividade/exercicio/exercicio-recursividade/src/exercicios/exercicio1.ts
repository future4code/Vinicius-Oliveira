/** Exercício 1
 A. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
 Resp.:
*/

const printNumbersA = (n: number) => {
  if (n >= 0) {
    printNumbersA(n - 1)
    console.log(n)
  }
}

/** Exercício 1
 B. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
 Resp.:
*/

const printNumbersB = (n: number) => {
  if (n >= 0) {
    console.log(n)
    printNumbersB(n - 1)
  }
}
