//Faça a implementação de uma Fila em Typescript e utilizando um Array como estrutura de base (em aula, usamos uma Lista Ligada). Implemente os métodos:
/**
 * `isEmpty`: que indica se ela está vazia

  `enqueue`: que adiciona um elemento à fila

  `dequeue`: que retira um elemento da fila

  `print`: que imprima todos os elementos da fila
*/

//Resp.:
class Queue {
  constructor(public items: any[] = []) {}

  public isEmpty = (): boolean => this.items.length === 0

  public enqueue = (value: any): void => {
    const index = this.items.length
    this.items[index] = value
  }

  public dequeue = (): ListNode | null => {
    const removedItem = this.items[0]

    for (let i = 0; i < this.items.length; i++) {
      this.items[i] = this.items[i + 1]
    }

    this.items.length--

    return removedItem
  }
}
