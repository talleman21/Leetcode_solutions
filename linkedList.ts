// practice session to understand linked lists

interface IListNode{
  data:number
  next:IListNode|null
}

export interface ILinkedList{
  head:ListNode|null
  size():number
  clear():void
  getFirst():IListNode|null
  getLast():IListNode|null
  push(num:number):ILinkedList
}

class ListNode implements IListNode{
  data:number
  next:ListNode|null

  constructor(data:number){
    this.data = data
    this.next = null
  }
}


class LinkedList implements ILinkedList {
  head:ListNode|null

  constructor(head:ListNode|null = null){
    this.head = head
  }

  size(){
    let count = 0
    let node = this.head
    while (node){
      count++
      node = node.next
    }
    return count
  }

  clear(){
    this.head=null
  }

  getLast(){
    let lastNode = this.head
    if(lastNode){
      while(lastNode.next){
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirst(){
    return this.head
  }

  push(num:number){
    const last = this.getLast() as ListNode
    last.next = new ListNode(num)
    return this
  }
}

export const createList = (arr:number[]) => {
  const head = new ListNode(arr[0])||null
  let currentNode = head
  for(let i = 1; i < arr.length; i++){
    const next = new ListNode(arr[i])
    currentNode.next = next
    currentNode = next
  }

  return new LinkedList(head)
}