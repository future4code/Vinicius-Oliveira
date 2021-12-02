export function imprimeCharsIter(str: string): void {
  for (const char of str) {
    console.log(char);
  }
}

export function imprimeChars(str: string, index: number = 0): void {
  if (index === str.length) {
    return;
  }
  console.log(str[index]);

  imprimeChars(str, index + 1);
}
