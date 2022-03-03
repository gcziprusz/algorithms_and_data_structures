// https://leetcode.com/problems/rotate-string/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(!s||!goal || s.length!==goal.length) return false;   
    for(let _ of s) {
        let [first,...rest] = s;
        console
        s = [...rest,first].join('');
        if(s===goal) return true;
    }
    
    return false;
};


var rotateString = function(s, goal) {
    if(!s||!goal || s.length!==goal.length) return false;   
    return (s+s).includes(goal);
};
