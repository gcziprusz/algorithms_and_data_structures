// https://www.youtube.com/watch?v=lfRlvJX8dQc
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    // need a tmp header to point to list
    // short circuit if k less then 2  or list too short?
    // while we have curr.next loop
    // setup start and end 
    // move end k times and
    // break if null 
    //temporaryly store next part of list 
    // break list 
    // reverse sublist 
    
    // move pointers for next iteration 
    // return th.Next
    
    let tempHead = {next: head};
    let curr = tempHead;
    if (k< 2){
        return head;    
    }
    
    while(curr.next != null){
          let start = curr.next
          let end = curr.next
            
          for(let i =1;i<k&&end!=null;i++){
              end =end.next;
          }
        if(end===null){
            break
        }
        
        nextLst = end.next;
        end.next = null;
        // 1>2 nextLst > 3>4>5
        
        let c = start
        let previous = null
        while(c!=null){
            let next = c.next;
            c.next = previous;
            previous = c;
            c = next;
        }
        
        // 1<2 nextLst > 3>4>5
        //       ^
        // |_____|        
        start.next = nextLst    
        curr.next = end
        curr = start
        
    }
    return tempHead.next;
}
