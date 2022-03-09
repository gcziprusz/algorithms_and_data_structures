// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/
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
  let t = new ListNode(0,head);
  c=t
  while(c){
      while(c.next && histo.get(c.next.val) >1){
        c.next = c.next.next
      }
    c = c.next;
  }
  return t.next;  
};
