var intToRoman = function(num) {
    var map = {M : 1000,CM: 900,D: 500,CD: 400,C : 100,XC: 90,L: 50,XL: 40,X : 10,IX: 9,V: 5,IV: 4,I : 1},roman ='',i;
    for (i in map){
        while(num >= map[i]){
            roman += i;
            num -= map[i];
        }
    }
    return roman;
};

let dict = new Map([
  ['M',1000],
  ['CM',900],
  ['D',500],
  ['CD',400],
  ['C',100],
  ['XC',90],
  ['L',50],
  ['XL',40],
  ['X',10],
  ['IX',9],
  ['V',5],
  ['IV',4],
  ['I',1],
]);
function romanToInteger(num) {
  let r='';
  for(let [k,v] of dict){
     while(num >= v){
       r+= k;
       num -=v;
     }
  }
  return r;
}
