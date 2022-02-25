// https://leetcode.com/problems/one-edit-distance/
//  One Away 

var isOneEditDistance = function(s, t) {
    // make sure s is the longer of the 2 strings to simplify the checks
    if(s.length < t.length) return isOneEditDistance(t,s);
    
    if(s.length - t.length > 1) return false;
       
    let i=0,j=0,edits=0;
    while(i< s.length){
        if(s[i] !== t[j]){
            edits++;
            if(s.length != t.length){
                i++;
                continue;
            }
        }
        i++;
        j++;
    }
    return edits <= 1;
}
