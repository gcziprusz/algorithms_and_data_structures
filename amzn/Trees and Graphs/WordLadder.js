/** WIP
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
};

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

    // Queue for BFS
    let Q = new Array();
    Q.push({key:beginWord,value: 1});

    // Visited to make sure we don't repeat processing same word.
    let visited = new Map();
    visited.set(beginWord, true);

    while (Q.length !== 0) {
      let node = Q.pop();
      let word = node.key;
      let level = node.value;
      for (let i = 0; i < L; i++) {

        // Intermediate words for current word
        let newWord = word.substring(0, i) + '*' + word.substring(i + 1, L);

        // Next states are all the words which share the same intermediate state.
        let adjacentWord = allComboDict.get(newWord) || [];
        for (adjacentWord) {
          // If at any point if we find what we are looking for
          // i.e. the end word - we can return with the answer.
          if (adjacentWord.equals(endWord)) {
            return level + 1;
          }
          // Otherwise, add it to the BFS Queue. Also mark it visited
          if (!visited.has(adjacentWord)) {
            visited.set(adjacentWord, true);
            Q.set({key:adjacentWord, value:level + 1});
          }
        }
      }
    }

    return 0;
  }
