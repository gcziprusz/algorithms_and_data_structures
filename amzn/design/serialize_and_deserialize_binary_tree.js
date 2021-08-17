var serialize = function(root, str="") {
    if (root === null) {
        return str+="null,";
    } else {
        str+= root.val+",";
        str = serialize(root.left, str);
        str = serialize(root.right, str);
    }
    return str;
};


var deserialize = function(data) {
    let nodes = data.split(',');
    var recur = function() {
        let next = nodes.shift();
        if (next == "null") {
            return null;
        } else {
            let node = new TreeNode(next);
            node.left = recur();
            node.right = recur();
            return node;
        }
    }
    return recur();
};
