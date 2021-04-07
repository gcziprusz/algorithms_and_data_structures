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

/***********RECURSIVE*************/
var mergeKLists = function(lists) {
    let merged = null;
    for(list of lists){
        merged = merge(merged,list);
    }
    return merged;
};

var merge = function(l1, l2){
     if (l2 && l1) {
        if (l1.val < l2.val) {
          l1.next = merge(l1.next, l2);
          return l1;
        }
        l2.next = merge(l2.next, l1);
        return l2;
    }
    return l1 || l2;
}
