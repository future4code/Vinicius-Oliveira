export interface hashTable {
  [index: string]: any
}

const homer: hashTable = {
  name: "Homer Simpson",
  cartoon: "The Simpsons"
}


// console.log(homer.phrase); // undefined
console.log(homer["phrase"]); // undefined

homer.phrase = "Moe, me vê mais uma Duff Beer!"

delete homer.name

console.log(homer);

// const nomes = ["a", "b", "c"]

// console.log(nomes[1])