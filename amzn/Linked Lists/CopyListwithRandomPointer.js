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
        // If we have already processed the current node, then we simply return the cloned version of
        // it.
        if(visitedNodeDict.has(head)){
              return visitedNodeDict.get(head)             
        }
        // Create a new node with the value same as old node. (i.e. copy the node)
        let nodeCopy = new Node(head.val);
        // Save this value in the hash map. This is needed since there might be
        // loops during traversal due to randomness of random pointers and this would help us avoid
        // them.
        visitedNodeDict.set(head, nodeCopy)
            // Recursively copy the remaining linked list starting once from the next pointer and then from
        // the random pointer.
        // Thus we have two independent recursive calls.
        // Finally we update the next and random pointers for the new node created.
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
