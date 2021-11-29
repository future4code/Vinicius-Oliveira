export function fibonacci(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  }

  const elementoAnterior = fibonacci(n - 1);
  const outroElementoAnterior = fibonacci(n - 2);

  return elementoAnterior + outroElementoAnterior;
}
