/**
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
