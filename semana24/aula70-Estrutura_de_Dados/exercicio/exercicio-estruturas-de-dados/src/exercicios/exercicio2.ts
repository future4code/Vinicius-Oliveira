//Faça a implementação de uma Pilha em Typescript e utilizando uma Lista Ligada como estrutura de base (em aula, usamos um Array). Implemente os métodos:
/**
 * `isEmpty`: que indica se ela está vazia

  `push`: que adiciona um elemento à pilha

  `pop`: que retira um elemento da pilha

  ` print`: que imprima todos os elementos da pilha
*/

//Resp.:
class Stack {
  constructor(public frames: LinkedList = new LinkedList()) {}

  public isEmpty = (): boolean => this.frames.start === null

  public push = (value: any): void => {
    this.frames.addToTail(value)
  }

  public pop = (): any => {
    if (!this.isEmpty()) return null

    let previousNode: ListNode | null = null
    let currentNode: ListNode | null = this.frames.start

    while (currentNode!.next) {
      previousNode = currentNode
      currentNode = currentNode!.next
    }

    previousNode!.next = null

    return currentNode
  }
}
