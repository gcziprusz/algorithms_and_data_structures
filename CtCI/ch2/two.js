// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let d = new ListNode(0);
    d.next=head;
    
    let left=d;
    let right=d;
    for (let i =1;i <= n+1;i++) right = right.next;
    
    while(right) {
        right = right.next;
        left =left.next;
    }
    left.next = left.next.next;
    return d.next;
};
