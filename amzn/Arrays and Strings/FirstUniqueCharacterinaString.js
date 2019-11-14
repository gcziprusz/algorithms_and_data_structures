var firstUniqChar = function(s) {
  var characterInstances = new Map();
  var len = s.length
  for(var i =0; i < len; i++){
    var currChar = s[i]; 
    var currInstance = characterInstances.get(currChar) || 0;
    characterInstances.set(currChar,currInstance+1);
  }
  for(var j = 0; j< len ; j ++){
    if(characterInstances.get(s[j]) === 1){
      return j;
    }
  }
  return -1;
}
