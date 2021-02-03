/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // corner cases and short circuit
    var h = {};
    for(var s of  strs){
        var sorted = [...s].sort().join();
        if(!h[sorted]){
            h[sorted] = [];
        }
             h[sorted].push(s);
    }
    return Object.values(h);
};

/* Use a Map and less operations */
var groupAnagrams = function(strs) {
    let grams = new Map();
    for(s of strs){
       let k = [...s].sort().join("");
       grams.set(k, [...(grams.get(k)|| []),s]);
    }
    return [...grams.values()];
};
