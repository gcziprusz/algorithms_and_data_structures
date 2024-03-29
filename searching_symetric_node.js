// https://kuzzmi.com/blog/searching-for-a-symmetric-node/


// <div id="root1">
//     <div>
//       <div></div>
//     </div>
//     <div>
//       <div id="node1"></div>
//       <div></div>
//     </div>
//   </div>

//   <div id="root2">
//     <div>
//       <div></div>
//     </div>
//     <div>
//       <div id="node2"></div>
//       <div></div>
//     </div>
//   </div>

// This function returns a real array of Nodes, so we can use methonds like "indexOf"
function getChildren(node) {
    // or you can use Array.from(node.childNodes);
    return Array.prototype.slice.call(node.childNodes);
}

// This function returns an array of indices from given node to the root
function getPath(root, node) {
    const path = [];
    let curElement = node;

    // This is important as if a node is null or doesn't have a parent
    // there is no need of searching further
    while(curElement !== root && curElement && curElement.parentNode) {
     const index = getChildren(curElement.parentNode).indexOf(curElement);
     path.push(index);
        curElement = curElement.parentNode;
    }

    return path;
}

// Popping all values from the array of indices we go to the symmetrical node
function getNodeByPath(root, originalPath) {
    const path = [].concat(originalPath);
    let element = root;
    while (path.length) {
       element = getChildren(element)[path.pop()];
    }
    return element;
}

// For convenience
function getSymmetricNode(root1, root2, node) {
 const path = getPath(root1, node);
 return getNodeByPath(root2, path);
}

const root1 = document.getElementById('root1');
const root2 = document.getElementById('root2');
const node1 = document.getElementById('node1');
const node2 = document.getElementById('node2');

const nodeX = getSymmetricNode(root1, root2, node1);

console.log(nodeX === node2); // true


// If we record the index of the el at each level we can use it to find els in the other tree

// <HTML#r1>.childNodes v 
// [<BODY>.parentNode ^] 
// [<DIV>       <DIV>       <SPAN>      <TEXT>]
// [<P><I>]     [<A#1><txt>]    [<txt>]       []


// <HTML#r2>.childNodes v 
// [<BODY>.parentNode ^] 
// [<DIV>       <DIV>       <SPAN>      <TEXT>]
// [<P><I>]     [<A#2><txt>]    [<txt>]     []  

// [level_3_index,level_2_index,level_1_index,level_0_index];



/**
 * Using the node walker API 
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
  const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

  let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];

  while (currentNodes[0] !== target) {
    currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
  }

  return currentNodes[1];
}


/** recursive option **/
const findCorrespondingNode = (rootA, rootB, target) => {
  if(rootA === target) {
    return rootB;
  }
  for (let i = 0; i < rootA.children.length; i++) {
    const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
    if(foundNode) return foundNode;
  }
}


