function longestUniqueSubstr(str) {
  // your code here
  const resultSet = new Set();
  let result = '';

  for(let i = 0; i < str.length; i ++) {
    // if match in set, compare set and result length
    // set result to longer length, and clear set
    if (resultSet.has(str.charAt(i))) {
      const a = [...resultSet].join('');

      result = a.length > result.length ? a : result;
      resultSet.clear();

    } else {
      resultSet.add(str.charAt(i))
    }
  }

  return result;
}
