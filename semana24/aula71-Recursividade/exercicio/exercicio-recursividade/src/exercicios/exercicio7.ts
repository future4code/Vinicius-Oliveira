/** Exercício 7
 Escreva uma função recursiva que determine o primeiro caractere maiúsculo de uma string
 Resp.:
*/

export const findFirstCapitalLetter = (
  s: string,
  char: string = ""
): string => {
  if (char && char.toUpperCase() === char) {
    return char
  }
  return findFirstCapitalLetter(s.substring(1), s[0])
}
