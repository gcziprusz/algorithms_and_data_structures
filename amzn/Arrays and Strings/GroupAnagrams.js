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
