// https://leetcode.com/problems/climbing-stairs/submissions/
var climbStairs = function(n) {
    let cache = [0,1,2];
    for(let i =3;i<=n;i++){
        cache[i] = cache[i-1]+cache[i-2];
    }
    return cache[n]
};
