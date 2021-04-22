/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(t, s) {
    let si = 0;
    let ti = 0;
    
    while(si < s.length && ti < t.length){
        if (s.charAt(si) === t.charAt(ti)) ti++;
        si++;
    }
    return ti === t.length;
};
