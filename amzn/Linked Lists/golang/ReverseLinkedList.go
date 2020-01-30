/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// While you are traversing the list, change the current node's 
// next pointer to point to its previous element. 
// Since a node does not have reference to its previous node, 
//   you must store its previous element beforehand. 
//   You also need another pointer to store the next 
//   node before changing the reference. 
//   Do not forget to return the new head reference at the end!

func reverseList(head *ListNode) *ListNode {
   var  prev *ListNode
    for head != nil {
        temp := head.Next
        head.Next = prev
        prev = head
        head = temp
    }
    return prev
}
