//Existe um outro tipo de estruturas de dados que não foi visto na aula: a Lista Duplamente Ligada (Doubly Linked List). Ela possui as características da Lista Ligada e uma a mais: seus elementos possuem um outro apontador (previous) para o elemento anterior a eles. A imagem abaixo representa isso:

//O elemento inicial da lista não possui nenhum valor nesse apontador, já que, antes dele, não existe nenhum elemento.
//Implemente uma Lista Duplamente Ligada, com os métodos:
/**
 * `appendToTail`: que deve adicionar um elemento à lista

  `print`: que deve imprimir todos os elementos da lista

  `searchElement`: que deve retornar o primeiro elemento cujo valor seja o número procurado

  `deleteElement`: que procurar um elemento, deletá-lo da lista e devolver o nó deletado
*/

//Resp.:
export class DoublyLinkedList {
  constructor(public start?: DoublyLinkedListNode) {}

  public appendToTail(value: number) {
    const newNode = new DoublyLinkedListNode(value)

    if (!this.start) {
      this.start = newNode
    } else {
      let node = this.start
      while (node.getNext() !== undefined) {
        node = node.getNext()!
      }
      node.setNext(newNode)
      newNode.setPrevious(node)
    }
  }

  public print(): void {
    let i = 1
    let node = this.start
    while (node !== undefined) {
      console.log(`Elemento ${i}`)
      console.log(" ", node)
      node = node.getNext()
      i++
    }
    console.log()
  }

  public searchElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.start
    while (node !== undefined && node.value !== value) {
      node = node.getNext()
    }
    return node
  }

  public deleteElement(value: number): DoublyLinkedListNode | undefined {
    let node = this.searchElement(value)
    if (node) {
      const previous = node.getPrevious()
      const next = node.getNext()
      if (next) {
        next.setPrevious(previous)
      }
      if (previous) {
        previous.setNext(next)
      } else {
        this.start = next
      }
    }
    return node
  }
}

export class DoublyLinkedListNode {
  constructor(public value: number) {}

  private previous?: DoublyLinkedListNode
  private next?: DoublyLinkedListNode

  public setPrevious(node?: DoublyLinkedListNode) {
    this.previous = node
  }

  public getPrevious(): DoublyLinkedListNode | undefined {
    return this.previous
  }

  public setNext(node?: DoublyLinkedListNode) {
    this.next = node
  }

  public getNext(): DoublyLinkedListNode | undefined {
    return this.next
  }
}
