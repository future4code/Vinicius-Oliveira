//A. Como podemos representar uma Matriz em Typescript?
//Resp.: Podemos representar como um array de arrays de número. O exemplo dado poderia ser representado como:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

//B. Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, retorne um erro: Fora do intervalo da matriz).
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
