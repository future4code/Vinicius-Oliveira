//Determine a complexidade dos seguintes algoritmos

export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz")
  }

  matrix[rowIndex][columnIndex] = value
}

//Resp.: A complexidade é O(1), pois nesse caso n --> 1.
