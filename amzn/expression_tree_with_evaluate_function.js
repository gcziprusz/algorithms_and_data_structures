 // Design an Expression Tree With Evaluate Function
/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

var Node = function () {
  if (this.constructor === Node) {
    throw new Error('Cannot instanciate abstract class');
  }
};

Node.prototype.evaluate = function () {
  throw new Error('Cannot call abstract method')
};

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder{
	/**
     * @param {string[]} s
     * @return {Node}
     */
	buildTree(postfix) {
    	
	}
    
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
const opFunMap = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y,
}

const Node = function(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
};

Node.prototype.evaluate = function() {
  const { data, left, right } = this;
  if (!left) return data;
  
  const opFun = opFunMap[data];
  return opFun(left.evaluate(), right.evaluate());
};

class TreeBuilder {
  buildTree(postfix) {
    const stk = [];
    for(const p of postfix) {
      if (p in opFunMap) {
	    // note left operand is pushed first
        const right = stk.pop(), left = stk.pop();
        stk.push(new Node(p, left, right));
      } else {
        stk.push(new Node(+p));
      }
    }
    return stk[stk.length - 1];
  }
}
