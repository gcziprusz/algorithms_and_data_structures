class Node {
  constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null; 
  }
}
class Stack{
    constructor(){
      this.head = null
    }
    push(data){
       if (this.head === null) this.head = new Node(data)
       else {
         //         v-N(data) -> null
         // null<- N(data)-^
         // H      _^
          // this.head = new_node
         let new_node = new Node(data)
         this.head.prev = new_node
         new_node.next = this.head
         new_node.prev = null
         this.head = new_node
       }
        //         
        //          
       //           
      //      (prev|data|next) <-> (prev|data|next) ->
      //         |         ^
//               v         |
      //      (prev|data|next) 
//                   ^   
                  // |
      //            (H)
    }
    pop(self){
        if (this.head===null) return null
        else if (this.head.next === null){
          let temp = this.head.data
          this.head = null
          return temp
        }
        else{
           let temp = this.head.data
           this.head = this.head.next
           this.head.prev = null
           return temp
        }
    }
     top(){
       return this.head.data
    }
    size(){
        let temp = this.head
        let count = 0
        while (temp !== null){
          count = count + 1
          temp = temp.next
        }
        return count
    }
     isEmpty(){
      if(this.head === null) return true
      else return false
    }
     printstack(){
       console.log("stack elements are:")
        let temp = this.head
        while( temp !== null ) {
          console.log(temp.data, "->")
          temp = temp.next
        }
    }
}
  let stack = new Stack()
  console.log("Stack operations using Doubly LinkedList")
  stack.push(4)
  stack.push(5)
  stack.push(6)
  stack.push(7)
  stack.printstack()
  console.log("Top element is ", stack.top())
  console.log("Size of the stack is ", stack.size())
  stack.pop()
  stack.pop()
  stack.printstack()
  console.log("stack is empty:", stack.isEmpty())
