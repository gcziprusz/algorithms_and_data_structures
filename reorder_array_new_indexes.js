function sort(items, newOrder) {
   // [ 'F', 'A',  'E', 'D', 'C', 'B']
   // keep swaping, until all elements are updated
   
   for (let i = 0; i < newOrder.length; i++) {
     while (newOrder[i] !== i) {
       const to = newOrder[i];
       [newOrder[i], newOrder[to]] = [newOrder[to], newOrder[i]];
       [items[i], items[to]] = [items[to], items[i]];
     }
   }
}


/*single loop alternative O(1) space*/
function sort(items, newOrder) {
  let i=0;
  while (i<items.length) {
    if (i!=newOrder[i]) {
      let newIndex = newOrder[i]; 
      [items[i], items[newIndex]] = [items[newIndex], items[i]];
      [newOrder[i], newOrder[newIndex]] = [newOrder[newIndex], newOrder[i]];
    }
    i++;
  }
}

/*SINGLE LOOP O(1) space with swap helper*/
function sort(items, newOrder) {
  let i=0;
  while(i<items.length){
    if(i !== newOrder[i]){
      let j = newOrder[i];
      swap(items,i,j)
      swap(newOrder,i,j)
    }
    i++;
  }
  function swap(arr,a,b){
    [arr[a],arr[b]]=[arr[b],arr[a]];
  }
}
