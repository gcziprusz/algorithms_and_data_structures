// https://leetcode.com/problems/partition-list 
// If relative order is important this is probably the best soln 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let d1 = less =  new ListNode(0);
  let d2 = more =  new ListNode(0);
    
  while(head){
      let next = head.next
      if(head.val >= x){
          more.next = head;
          more = more.next;
      } else{
          less.next = head;
          less=less.next;
      }
      head.next = null;
      head=next;
  }
   less.next = d2.next;
   return d1.next;
};
