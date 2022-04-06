// https://leetcode.com/problems/delete-node-in-a-linked-list/
// after couple initial wtf's comes the facepalm and easy buttom smash :) 
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
