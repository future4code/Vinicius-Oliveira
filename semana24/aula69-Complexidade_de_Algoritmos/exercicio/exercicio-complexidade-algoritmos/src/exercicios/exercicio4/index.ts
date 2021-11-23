//Determine a complexidade dos seguintes algoritmos

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true
    }
  }
  return false
}

/** Resp.: Sendo n o tamanho do array listOfNumbers, a complexidade é O(n²)
 *Essa questão é uma "pegadinha". Serve para mostrar que algumas funções fazem iterações, mesmo que um loop não esteja explícito. Nesse caso, por mais que não saibamos o que a função indexOf faz, dá para imaginar que ela percorre a o array tentando achar um index. Dessa forma, há um loop dentro do outro, caracterizando uma complexidade quadrática.
 *Em uma entrevista, você poderia dizer "estou assumindo que essa função indexOf possui uma complexidade O(n)", e mesmo que por algum detalhe isso esteja errado, não tem problema. O importante é que faça sentido com o que a função faz. Se é uma função que encontra o index, podemos assumir que ela vai precisar olhar pra cada elemento do array, o que gera a complexidade O(n). Como está dentro de um loop, multiplicamos pelo loop externo, dando o O(n^2).
 */