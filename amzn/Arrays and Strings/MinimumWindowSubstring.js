// https://www.youtube.com/watch?v=jSto0O4AJbM&feature=emb_logo
function minWindow(s, t) {
  
  // Create a map of t to number of occurences
  let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);

  // How many characters do we need?
  let count = t.length;

  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    // if a needed letter is found at this index bump needed characters and occurence count down
    if (map[s[r++]]-- > 0) count--;
    
     // we found a substring that has all characters
    while (count === 0) {
      // is the found substrings len less then one we found before?
      if (r - l < minLen) {
        // store the start and its length
        minLen = r - l;
        start = l;
      }
      // is the character at the left pointer something we need ?
      if (map[s[l++]]++ === 0) count++;
    }
  }
  return minLen === Infinity ? '' : s.substr(start, minLen);
}
