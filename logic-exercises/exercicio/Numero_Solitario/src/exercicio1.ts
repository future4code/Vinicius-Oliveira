/**
 * ### Exercício do dia - O número solitário
  Escreva uma função que recebe um array não vazio de números. Todos os números do array aparecem 2 vezes, com excessão de um. Encontre (e retorne) esse número.

  - **Desafio**
    Resolva o problema usando uma complexidade linear de tempo (O(N)). Isso significa que você só deve iterar o array **uma vez** para encontrar o número.

  - Exemplo 1

    **Input:** `[2,2,1]`

    **Output:** `1`

  - Exemplo 2

    **Input:** `[4,1,2,1,2]`

    **Output:** `4`

 */

import { HashTable } from "./entities"

function PrimeiroNumeroSolitario(nums: number[]): number {
    let result = 0
    for (const num of nums) {
        result ^= num
    }
    return result
}

function SegundoNumeroSolitario(nums: number[]): number {
    const hash: HashTable = {}

    for (let num of nums) {
        const key = num

        if (key in hash) {
            delete hash[key]
        } else {
            hash[key] = true
        }
    }

    return Number(Object.keys(hash)[0])
}

console.log('XOR: ', PrimeiroNumeroSolitario([4,1,2,1,2]))
console.log('Hash Table: ', SegundoNumeroSolitario([4,1,2,1,2]))