// EXERCÍCIO 01
function inverteArray(array) {
  const inversao = []
  for(let i = array.length - 1; i >= 0; i--) {
    inversao.push(array[i])
  }
  return inversao
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const criarArrayParesElevadosAoQuadrado = array.filter((elemento) => {
    return elemento % 2 === 0
  }).map((elemento) => {
    return Math.pow(elemento, 2)
  })
  return criarArrayParesElevadosAoQuadrado
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const criarArrayPares = array.filter((elemento) => {
    return elemento % 2 ===0
  })
  return criarArrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  const resposta = [(booleano1 && booleano2 && !booleano4), ((booleano1 && booleano2) || !booleano3), (booleano2 || booleano3) && (booleano4 || booleano1), (!(booleano2 && booleano3) || !(booleano1 && booleano3)), (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))]
  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let array = []
  for(let i = 0; i < n; i++) {
    array.push(2*i)
  }
  return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a !== b && b !== c){
    return 'Escaleno'
  } else if(a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let objetoDoisNumeros = {
    maiorNumero: 
  }
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
