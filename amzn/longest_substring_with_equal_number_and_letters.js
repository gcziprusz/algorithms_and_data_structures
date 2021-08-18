
    function equalCharAndNumber(string){
       let sumSoFar = 0,indices = new Map([[0,-1]]),candidate = -Infinity;

        for (let i =0;i< string.length;i++){
          if(RegExp(/[a-z]/,'i').test(string[i])) sumSoFar += 1
          else sumSoFar -= 1
//           console.log("sumSoFar",sumSoFar+" "+string[i])
          // I have never seen it just add to indices and move on
          if (!indices.has(sumSoFar)) indices.set(sumSoFar, i)
          else candidate = Math.max(candidate, i - indices.get(sumSoFar))
        }
        return candidate
    }

       

console.log(equalCharAndNumber("abcde123"))
console.log(equalCharAndNumber("a1"))
console.log(equalCharAndNumber("a1b2"))
console.log(equalCharAndNumber("abcde123lmnop123345"))
