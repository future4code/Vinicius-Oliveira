/** Exercício 8
 Calcule a complexidade do seguinte algoritmo.
 Resp.: O(b)
*/

function power(a: number, b: number): number {
  if (b < 0) {
    return 0 // Erro
  } else if (b === 0) {
    return a
  } else {
    return a * power(a, b - 1)
  }
}
