// Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
        var n = s.length;
        var set = new Set();
        var ans = 0, i = 0, j = 0;
        while (i < n && j < n) {
          if (!set.has(s[j])){
                set.add(s[j++]);
                ans = Math.max(ans, j - i);
            }
            else {
                set.delete(s[i++]);
            }
        }
        return ans;
    }
