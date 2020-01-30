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
    // track curr 
    let curr = head; 
    
    while(curr !=null){
    // 1 store next
        let next = curr.next;
    // 2 point curr to prev
        curr.next = prev;
    // 3 update prev to curr 
        prev = curr;
    // 4 update curr to next
        curr = next;
    }
    
    return prev;
    
}
