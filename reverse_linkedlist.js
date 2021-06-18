/****ITERATIVE***/
const reverseLinkedList = (list) => { 
  let nextNode = null;
  let prevNode = null;
  while (list) {
    nextNode = list.next;
    list.next = prevNode;
    prevNode = list;
    list = nextNode;
  }
  
  return prevNode;
}


/**RECURSIVE**/
const reverseLinkedList = (list, next) => {
    if (!list) return;
    const currentNext = list.next;
    list.next = next;
    if (currentNext) {
        return reverseLinkedList(currentNext, list);
    }
    return list;
}
