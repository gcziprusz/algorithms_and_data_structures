// https://jsfiddle.net/degamer106/k0euyrd1/ 

class Store {
	constructor() {
  	this.keys = [];
    	this.values = [];
  }
  
  set(node, value) {
  	let index = this.keys.indexOf(node);
    
    if (index === -1) {
    	index = this.keys.push(node) - 1;
    }
    
    this.values[index] = value;
  }
  
  get(node) {
  	return this.values[this.keys.indexOf(node)];
  }
  
  has(node) {
  	return this.keys.indexOf(node) !== -1;
  }
  
  add(node, value) {
	if (this.has(node)) {
		this.set(node, this.get(node) + value);
	} else {
		this.set(node, value);
	}
  }
  
  remove(node) {
  	const index = this.keys.indexOf(node);
    
    if (index !== -1) {
    	this.keys.splice(index, 1);
	this.values.splice(index, 1);
    }
  }
  
  size() {
  	return this.keys.length;
  }
}

const countButton = document.getElementById('count');
const resetButton = document.getElementById('reset');
const store = new Store();

countButton.addEventListener('click', function() {
	store.add(countButton, 5);
  countButton.innerText = store.get(countButton);
});

resetButton.addEventListener('click', function() {
  store.remove(countButton);
  countButton.innerText = 0;
});


/*alternative using Map*/


class Store {
  constructor(){
    this.nodes = new Map();
  }
  
  has(node) {
    return this.nodes.has(node);
  }
  set(node,value){
    this.nodes.set(node,value);
  }
  get(node){
      return this.nodes.get(node);
  }
}

const node1 = document.createElement("div");
const node2 = document.createElement("a");
const node3 = document.createElement("span");
const node4 = document.createElement("ul");

const store = new Store();

store.set(node1,1);
store.set(node2,2);
store.set(node3,3);

console.assert(store.get(node1) === 1) // 1
console.assert(store.get(node2) === 2) // 2
console.assert(store.get(node3) === 3)  // 3

console.assert(store.has(node1) ===true) // true
console.assert(store.has(node4) ===false) // false
