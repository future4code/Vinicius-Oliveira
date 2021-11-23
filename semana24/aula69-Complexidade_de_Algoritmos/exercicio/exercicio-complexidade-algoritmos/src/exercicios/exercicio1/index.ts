//Determine a complexidade dos seguintes algoritmos

const findFirstRecurringCharacter = (input: any) => {
  const charHashMap: any = {}
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char
    }
    charHashMap[char] = true
  }
  return null
}

//Resp.: Sendo n o tamanho da string input, complexidade é O(n)
