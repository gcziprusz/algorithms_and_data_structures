// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/submissions/
// 1836. Remove Duplicates From an Unsorted Linked List

/**

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function(head) {
  let histo = new Map();
  let c = head;
  while(c){
      histo.set(c.val, (histo.get(c.val)||0)+1);
      c = c.next;
  }
  let tmp = new ListNode(0,head);
  c = tmp;
  while(c){
      while(c.next && histo.get(c.next.val) >1){
        c.next = c.next.next
      }
    c = c.next;
  }
  return tmp.next;  
};


//       c
//       |
//       v
// -->  head
// |     |
// |     v     
// |   [v:1,next:3] -|  [v:2,next:3]  ->   [v:3,next:2]   ->    [v:2,next:null]
// |            |________________________^
// |       c
// |       |
// |       v
// |     tmp
// |      |
// |      v     
// - [v:0,next:1]
