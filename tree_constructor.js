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
	for(key of parents.keys()){
      if(parents.get(key)>2) return false;
    }
	return true;
}



console.log(TreeConstructor( ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]) === true);

console.log(TreeConstructor( ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]) === false);
