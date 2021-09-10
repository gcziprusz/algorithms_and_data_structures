function firstNotRepeatingCharacter(s) {
    let m = new Map();
    for(let c of s){
        m.set(c,(m.get(c)||0)+1)
    }
    for(let [char,occurence] of m){
        if(occurence===1) return char;
    }
    return "_";
}

function firstNotRepeatingCharacter(s) {
    var arr = s.split("");
    for(var i = 0; i < arr.length; i++){
        if( arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            return arr[i]
        }
    }
    return "_"
}
