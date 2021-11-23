import { hashTable } from "../hash_tables_lesson"

// 1. GERAR O TOTAL DE MEDALHAS POR PAÍS A PARTIR DO TOTAL DE MEDALHAS POR COMPETIDOR

// 2. CASOS DE TESTE
const competitors = [
  {
    name: "Usain Bolt",
    federation: "Jamaica",
    modality: "Atletismo",
    numberOfMedals: 54
  },
  {
    name: "Rebeca Andrade",
    federation: "Brasil",
    modality: "Ginástica",
    numberOfMedals: 33
  },
  {
    name: "Michael Phelps",
    federation: "EUA",
    modality: "Natação",
    numberOfMedals: 71
  },
  {
    name: "Alison dos Santos",
    federation: "Brasil",
    modality: "Atletismo",
    numberOfMedals: 19
  }
]
// Jamaica    Brasil    EUA
// 54         52        71


// 3. ALGORITMO FORÇA BRUTA
//      listar as federações (map)
//      somar o total de medalhas de cada uma
//        para cada país(forEach / filter), calcular a soma das medalhas (reduce)
//      retornar o resultado

function generateMedalBoard(
  competitors: competitor[]
) {

  const result: any = []

  const federations = competitors
    .map(competitor => competitor.federation)
    .filter((federation, i, federations) => {
      // remove elementos duplicados
      return federations.indexOf(federation) === i
    })

  federations.forEach(federation => {
    const totalOfMedals = competitors
      .filter(competitor => competitor.federation === federation)
      .reduce(
        // soma as medalhas de cada federação
        (total, current) => total + current.numberOfMedals,
        0
      )

      result.push({federation, totalOfMedals})
  })

  return result
}

// 4. OTIMIZAR
//      criar uma hash table (objeto vazio) representando o resultado
//      percorrer todas os itens do array
//        se o resultado já tiver uma chave para o país, adicionar o número de medalhas
//        se não tiver, criar essa chave

// 5. CONFERIR A SOLUÇÃO

// 6. IMPLEMENTAÇÃO

interface competitor {
  name: string
  federation: string
  modality: string
  numberOfMedals: number
}

function createMedalBoard(
  competitors: competitor[]
) {
  const result: hashTable = {}

  for (let competitor of competitors) {

    if (result[competitor.federation]) {
      result[competitor.federation] += competitor.numberOfMedals
    } else {
      result[competitor.federation] = competitor.numberOfMedals
    }
  }

  return result
}

// 7. TESTES

console.log(createMedalBoard(competitors))
// console.log(generateMedalBoard(competitors))