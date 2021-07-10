// source https://coderbyte.com/editor/Tree%20Constructor:JavaScript

function TreeConstructor(strArr) { 
  var arr=strArr
    .map(c=>c.replace(/[()]/g,'')
    .split(',')
    .map(a=>parseInt(a))),
			parents=new Map();

	for(var i=0;i<arr.length;i++){
    let node = arr[i][1]
    parents.set(node,(parents.get(node) ||0)+1);
	}
	for(key in parents){
    if(parents.get(key)>2) return 'false'
  }
	return 'true';
}
   
// keep this function call here 
TreeConstructor(readline());

