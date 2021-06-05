
// Array indexOf return the first occurence of el or -1 
// If you want to find all instances loop while idx -1 

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var e = 'a';

var idx = array.indexOf(e);
while(idx !== -1){
  indices.push(idx);
  idx = array.indexOf(e,idx+1);
}

console.log(indices);
