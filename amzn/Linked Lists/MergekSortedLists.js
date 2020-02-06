/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length ===0 ) {
        return null;
    }
    while(lists.length > 1){
        let a = lists.shift(); 
        let b = lists.shift(); 
        let mergedList = mergeTwoLists(a,b);
        lists.push(mergedList);
    }
    return lists[0];
}  
function mergeTwoLists(a,b){
    let tmpHead = new ListNode();
    let curr = tmpHead;
    
    while(a!==null&&b!==null){
        if(a.val < b.val){
            curr.next = a;
            a = a.next;
        }else{
            curr.next = b;
            b = b.next;
        }
        curr = curr.next;
    }
    if(a!==null){
        curr.next = a   
    }
     if(b!==null){
        curr.next = b  
    }
    return tmpHead.next;
}
