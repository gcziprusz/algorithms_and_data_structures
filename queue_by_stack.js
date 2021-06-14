
// QUEUE FIFO
// -------------------
//  #4>  #3>  #2> #1>
// -------------------
//  ^               ^
//  |               |
//enqueue          peek
//                dequeue


// STACK FILO
//   ??
// | #4 |    |#1|
// | #3 |    |#2| 
// | #2 |    |#3|      
// | #1 |    |#4|
// _______  ______

class Queue {
  constructor(){
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }
  enqueue(element) { /* add element to queue, similar to Array.prototype.push */ 
    this.pushStack.push(element);
  }
  peek() { /* get the head element*/ 
    if(this.popStack.size() >0){
      this.popStack.peek();
    }
    this._pour()
    return this.popStack.peek()
  }
  _pour(){
     while(this.pushStack.size()>0){
      this.popStack.push(this.pushStack.pop())
    }
  }
  dequeue() { /* remove the head element, similar to Array.prototype.pop */ 
     if(this.popStack.size() >0){
      this.popStack.peek();
    }
    this._pour()
    return this.popStack.pop()
  }
  size() { /* count of elements */ 
    return this.pushStack.size()+this.popStack.size();
  }
}
