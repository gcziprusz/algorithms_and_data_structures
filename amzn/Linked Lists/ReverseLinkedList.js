/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    // track previous
    let prev = null;
    while(head!= null){
        // 1 store next so we dont break the link with next step pointing back to previous
        let tmpNext = head.next; 
        // now we can point back 
        head.next = prev;
        // we can bump previous to current node 
        prev = head;
        // bump current to stred next
        head = tmpNext;
    }
    return prev;
}
