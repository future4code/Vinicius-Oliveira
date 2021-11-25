// 1. DETERMINAR SE UMA STRING É UM PALÍNDROMO

// 2. CASOS DE TESTE
//    "Bob" -> true
//    "A dama admirou o rim da amada." -> true
//    "Bobby" -> false
//    "Aí Lima falou: Olá, família'"

// 3. ALGORITMO DE FORÇA BRUTA
//    formatar a entrada (remover maiúsculas, caracteres especiais, acentuação)
//    inverter a ordem dos caracteres
//        transformar a string num array de caracteres
//        inverter o array
//        concatenar os caracteres
//    comparar a string invertida com a original formatada

// 4. OTIMIZAÇÃO 

// 5. CONFERIR A SOLUÇÃO

// 6. IMPLEMENTAÇÃO

const formatText = (text:string) => text  
  .toLocaleLowerCase()
  .replace(/[.,:'" ]/g, "")
  .replace(/[áàãâ]/g, "a")
  .replace(/[íì]/g, "i")

const reverse = (text:string) => text // "bola"
  .split("")                          // ["b", "o", "l", "a"]
  .reverse()                          // ["a", "l", "o", "b"]
  .join("")                           // "alob"

function checkPalindrome(
  text: string
): boolean {

  const formattedText = formatText(text)

  console.log(formattedText)
  const reversedText = reverse(formattedText)

  return reversedText === formattedText
}

// 7. TESTE
console.log(checkPalindrome("Bob"))
console.log(checkPalindrome("Bobby"))
console.log(checkPalindrome("Aí Lima falou: 'Olá, família'"))