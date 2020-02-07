/*************** RECURSIVE ****************
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
    let visitedNodeDict = new Map();
    var copyRandomList = function(head) {
        if(!head) return null;
        if(visitedNodeDict.has(head)){
              return visitedNodeDict.get(head)             
         }
        let nodeCopy = new Node(head.val);
        visitedNodeDict.set(head, nodeCopy)
        nodeCopy.next = copyRandomList(head.next);
        nodeCopy.random = copyRandomList(head.random);
        return nodeCopy;    
};


/***************** ITERATIVE ****************
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
let visitedNodeDict = new Map();

function getOrCreateNode(node){
    if(!node){
        return null;
    }
    
    if (!visitedNodeDict.has(node)){
        visitedNodeDict.set(node, new Node(node.val))
    }
    return visitedNodeDict.get(node)
}
    
var copyRandomList = function(head) {
    if (!head) return null;

    var newHead = new Node(head.val);
    var oldHead = head
    visitedNodeDict.set(head, newHead);

    while(oldHead){
        newHead.next =  getOrCreateNode(oldHead.next); 
        newHead.random =  getOrCreateNode(oldHead.random);

        oldHead = oldHead.next;
        newHead = newHead.next;
    }
    return visitedNodeDict.get(head)
};
