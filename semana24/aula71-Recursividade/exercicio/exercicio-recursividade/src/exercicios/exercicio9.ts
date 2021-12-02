/** Exercício 9
 Calcule a complexidade do seguinte código
 Resp.: O(2^n)
*/

function allFib(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(`i: ${fib(i)}`)
  }
}

function fib(n: number): number {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}
