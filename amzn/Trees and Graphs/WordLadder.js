  
/** WIP
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
function ladderLength(beginWord,  endWord, wordList) {

    // Since all words are of same length.
    let L = beginWord.length;

    // Dictionary to hold combination of words that can be formed,
    // from any given word. By changing one letter at a time.
    let allComboDict = new Map();

    wordList.forEach(
        word => {
          for (let i = 0; i < L; i++) {
            // Key is the generic word
            // Value is a list of words which have the same intermediate generic word.
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);
            let transformations = allComboDict.get(newWord) || [];
            transformations.push(word);
            allComboDict.set(newWord, transformations);
          }
        });
    console.log("allComboDict",allComboDict)
    // Queue for BFS
    let Q = new Array();
    Q.push({key:beginWord,value: 1});

    // Visited to make sure we don't repeat processing same word.
    let visited = new Map();
    visited.set(beginWord, true);

    while (Q.length !== 0) {
      let node = Q.shift();
      let word = node.key;
      let level = node.value;
      for (let i = 0; i < L; i++) {

        // Intermediate words for current word
        let newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);

        // Next states are all the words which share the same intermediate state.
        let adjacentWords = allComboDict.get(newWord) || [];
        for (var adjacent of adjacentWords) {
          // If at any point if we find what we are looking for
          // i.e. the end word - we can return with the answer.
        console.log("adjacent",adjacent,endWord,adjacent === endWord)
          if (adjacent === endWord) {
            return level + 1;
          }
          // Otherwise, add it to the BFS Queue. Also mark it visited
          if (!visited.has(adjacent)) {
            visited.set(adjacent, true);
            Q.push({key:adjacent, value:level + 1});
          }
        }
      }
    }

    return 0;
  }


/****VERY SIMILAR WITH A FANCY HELPER***/
function ladderLength(beginWord,  endWord, wordList) {
    var len = beginWord.length;
    var maskDict = new Map();
    wordList.forEach(w => {
        for(var i=0;i<len;i++){
            var mw = w.maskWord(i);
            var matches = maskDict.get(mw) || [];
            matches.push(w);
            maskDict.set(mw,matches);
        }
    });
    let q = [{w:beginWord,l:1}]; 
    let v = new Map();
    v.set(beginWord,true);
    while(q.length!==0){
       let n= q.shift();
       for(let i=0;i<len;i++){
            let maskedWord = n.w.maskWord(i);
            let transforms = maskDict.get(maskedWord) || [];
            for(transform of transforms){
                if(transform === endWord){
                   return n.l+1;
                }
                if(!v.has(transform)){
                    q.push({w:transform,l:n.l+1})
                    v.set(transform,true);
                }
            }
       }
    }
    return 0;
}

String.prototype.maskWord = function(i) {
    return this.substring(0,i)+"*"+this.substring(i+1,this.length);
}
