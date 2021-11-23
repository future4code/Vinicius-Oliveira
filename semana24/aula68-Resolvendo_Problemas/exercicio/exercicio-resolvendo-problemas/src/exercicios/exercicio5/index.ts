//[Amazon] Considere que você tenha uma matriz de números cujas linhas e colunas estejam ordenadas da menor para a maior. Determine a quantidade de números negativos que há dentro da matriz.

export const findNegativeNumbersInMatrix = (m: number[][]): number => {
  let count = 0
  let row = 0
  let column = m[0].length - 1
  while (row < m.length && column >= 0) {
    if (m[row][column] < 0) {
      count += column + 1
      row++
    } else {
      column--
    }
  }
  return count
}
