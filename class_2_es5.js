/*ES CLASSES*/

// class Parent {
//   constructor(name) {
//     this.name=name;
//   }

//   getName(){
//     return this.name
//   }
// }

// class Children extends Parent {
//   constructor(props){
//     super(props);
//   }
// }

/** ES5 */
function Parent(name) {
  this.name = name
}

Parent.prototype.getName = function() {
  return this.name;
}

function Children(){
  Parent.apply(this, arguments);
}

Children.prototype = new Parent();

var child = new Children("babe");
console.log("ES7 children class",child.getName());
