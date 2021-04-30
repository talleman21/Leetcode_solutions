import  {createList,ILinkedList, IListNode, ListNode , LinkedList} from './LinkedList'

const mergeLists = (l1:ILinkedList,l2:ILinkedList) => {

  let list1:IListNode|null = JSON.parse(JSON.stringify(l1.head))
  let list2:IListNode|null = JSON.parse(JSON.stringify(l2.head))
  const newHead:IListNode = new ListNode(-1)
  let runner = newHead

  while(list1 && list2){
    if(list1 && list2 && list1.data && list2.data){
      if(list1.data < list2.data){
        runner.next = list1
        list1 = list1.next
      }else{
        runner.next = list2
        list2 = list2.next
      }
      runner = runner.next
    }
  }

  runner.next = list1||list2

  return new LinkedList(newHead.next)
  
}

const list1 = createList([1,3,5,48,52,55])
const list2 = createList([2,4,6,7,10,33,45,67,82])

const sortedList = mergeLists(list1,list2)

list1.print()
sortedList.print()