/**
 * https://www.youtube.com/watch?v=s8kQm8yhZ8U
 *
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists( l1,  l2) {
  if(!l1) {
    return l2
  }
   if(!l2) {
    return l1
  }
  if(l1.val < l2.val){
    l1.next =  mergeTwoLists(l1.next,l2);
    return l1;
  } else{
    l2.next =  mergeTwoLists(l2.next,l1);
     return l2;
  }
}


/* Iterative solution */
/**
 * https://www.youtube.com/watch?v=s8kQm8yhZ8U
 *
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

    



function mergeTwoLists( l1,  l2) {
 var res = new ListNode(-1);
 var head = res;
 while(l1!==null&&l2!==null){
     if(l1.val <= l2.val){
         res.next = l1;
         l1 = l1.next;
     } else {
         res.next = l2;
         l2 =l2.next;
     }
     res = res.next;
 }
  // At least one of l1 and l2 can still have nodes at this point, so connect
  // the non-null list to the end of the merged list.
//   if(l1) res.next = l1;
//   if(l2) res.next =l2;
 res.next = l1===null? l2:l1;
 return head.next
}
