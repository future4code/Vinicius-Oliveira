/**
 * ### Exercício de lógica - **Anagrama**
  Escreva uma função que recebe duas strings `s` e `t` e define se `t` é um anagrama de `s`. Ou seja, se com as mesmas letras de `s`, é possível escrever `t`.
 *Exemplos para melhor entendimento:
  - Exemplo 1

    **Input:** `s = "anagrama", t = "nagarama"`

    **Output:** `true`

    - Exemplo 2

    **Input:** `s = "gato", t = "toga"`

    **Output:** `true`

    - Exemplo 3

    **Input:** `s = "gato", t = "rato"`

    **Output:** `false`
 */

export default class Anagrama {
  VerificarAnagrama(s: string, t: string) {
    return s.split("").sort().join("") === t.split("").sort().join("")
  }
}
