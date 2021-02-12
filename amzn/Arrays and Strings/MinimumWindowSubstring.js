// https://www.youtube.com/watch?v=jSto0O4AJbM&feature=emb_logo
function minWindow(s, t) {
  let map = {};
  t.split('').forEach(c => map[c] = (map[c] || 0) + 1);

  let count = t.length;   // remaining matching count

  let l = 0;
  let r = 0;

  let start = 0;
  let minLen = Infinity;

  while (r < s.length) {
    if (map[s[r++]]-- > 0) count--;

    while (count === 0) {   // valid
      if (r - l < minLen) {
        minLen = r - l;
        start = l;
      }

      if (map[s[l++]]++ === 0) count++; // make it invalid
    }
  }
  return minLen === Infinity ? '' : s.substr(start, minLen);
}
