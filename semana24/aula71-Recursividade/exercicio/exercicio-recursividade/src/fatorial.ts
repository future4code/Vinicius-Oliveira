function fatorial(n: number): number {
  if (n === 0) {
    return 1;
  }

  const calculoFatorial = n * fatorial(n - 1);

  console.log(n, calculoFatorial);
  return calculoFatorial;
}

console.log(fatorial(6));
