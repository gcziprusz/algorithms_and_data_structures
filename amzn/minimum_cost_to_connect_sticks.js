var connectSticks = function(sticks) {
    let merged = [],minCost=0;
    let sorted = sticks.sort((a,b) => a-b);
    if(sticks.length < 2) return minCost;
    
    while(merged.length > 1 || sorted.length){
        let first,second;
        if(!merged.length ||  sorted[0] <= merged[0]){
           first = sorted.shift();
        } else {
           first = merged.shift();
        }
         if(!merged.length ||  sorted[0] <= merged[0]){
           second = sorted.shift();
        } else {
           second = merged.shift();
        }
        let newStick = first+second;
        merged.push(newStick);
        minCost+=newStick;
    }
    return minCost;
}



// USING A MIN HEAP 
function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class MinHeap {
  constructor(items){
    this.arr = [];  
    for(let item of items){
      this.push(item);      
    }        
  }
  push(item){
    const { arr } = this;
    arr.push(item);
    let len = arr.length;    
    let child = len - 1;
    let parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;    
    
    while(parent >= 0 && arr[child] < arr[parent]){            
      swap(arr, child, parent);
      child = parent;
      parent = child % 2 === 0 ? (child - 2)/2 : (child - 1)/2;    
    }
  }
  pop(){
    const { arr } = this    
    if (!arr.length) return null;
    const result = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();    
    if (arr.length) this.heapify(0);        
    return result;
  }
  heapify(parent){       
    const { arr } = this;
    if (!arr.length) return null;
    let left = parent * 2 + 1;
    let right = parent * 2 + 2;
    
    if (arr[left] && arr[right]){
      if (arr[parent] > arr[left] && arr[left] < arr[right]){        
        swap(arr, left, parent);        
        this.heapify(left);
        return;
      }
      if (arr[parent] > arr[right] && arr[right] < arr[left]){
        swap(arr, right, parent);        
        this.heapify(right);
        return;
      }
    }
    if (arr[right] && arr[parent] > arr[right]){
      swap(arr, right, parent);        
      this.heapify(right);
      return;
    }
    if (arr[left] && arr[parent] > arr[left]) {
      swap(arr, left, parent);        
      this.heapify(left);    
      return;
    }
  }
  size(){
    return this.arr.length;
  }
  peek(){
    return this.arr[0];
  }
}

var connectSticks = function(sticks) {  
  if (sticks.length < 2) return 0;
  let minHeap = new MinHeap(sticks),cost = 0;
  while(minHeap.size() > 1){      
    const minStick1 = minHeap.pop(),minStick2 = minHeap.pop();        
    minHeap.push(minStick1 + minStick2);            
    cost += minStick1 + minStick2;
  }
  return cost;
};
