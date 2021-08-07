var maximumAverageSubtree = function(root) {
    let max=0;
    helper(root);
    return max;
    
    function helper(root){
        if(!root) return [0,0];
        
        let sum = root.val;
        let nodes = 1;
        
        let [leftSum, leftNodes] = helper(root.left);
        let [rightSum, rightNodes] = helper(root.right);
        
        sum+=leftSum+rightSum;
        nodes+= leftNodes+rightNodes;
        
        max = Math.max(max,sum/nodes);
        return [sum,nodes];
    }
};
