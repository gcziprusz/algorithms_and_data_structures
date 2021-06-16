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
