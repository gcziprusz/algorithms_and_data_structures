// semver compare
function compare(v1, v2) {
  const v1s = v1.split('.').map(n => parseInt(n));
  const v2s = v2.split('.').map(n => parseInt(n));
  const len = Math.max(v1s.length, v2s.length);
  for (let i = 0; i < len; i++) {
    if (v1s[i] < v2s[i]) return -1;
    if (v1s[i] > v2s[i]) return 1;
  }
  return 0;
}
