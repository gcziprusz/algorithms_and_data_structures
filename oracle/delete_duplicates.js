// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
var deleteDuplicates = function(head) {
   let c = head;
   while(c&&c.next){
       if(c.next.val === c.val){
           c.next = c.next.next;
       } else {
           c = c.next;
       }
   }
    return head;
};
