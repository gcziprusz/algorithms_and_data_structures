// [#1>2] [#2>3] [#3>4] [#4>null]

// 1 save > 2
// point to prev
// update prev to curr
// update curr to next 

// [#1>null] [#2>1] [#3>2] [#4>3]  

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
