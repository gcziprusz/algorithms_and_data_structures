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
