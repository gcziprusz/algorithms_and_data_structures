/*Write a function that takes an array containing
two strings where each string represents keypresses 
separated by commas. For this problem, a keypress can be either a printable character or a backspace
(represented by -B). Your function should determine if the two strings of keypresses are equivalent.

You can produce a printable string from such a string of keypresses by having backspaces erase one preceding 
character. Consider two strings of keypresses equivalent if they produce the same printable string. For example:
checkEquivalentKeypresses(["a,b,c,d", "a,b,c,c,-B,d"]) // true
checkEquivalentKeypresses(["-B,-B,-B,c,c", "c,c"]) // true
checkEquivalentKeypresses(["", "a,-B,-B,a,-B,a,b,c,c,c,d"]) // false

Have fun and you got this!!
*/

function removeBackspaces(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-B' && result.length > 0) {
      result.pop();
    } else if (arr[i] !== '-B') {
      result.push(arr[i]);
    }
  }
  return result;
}

function checkEqualInputs(arr) {
  const [arr1, arr2] = arr.map((e) => e.split(','))
  const result1 = removeBackspaces(arr1);
  const result2 = removeBackspaces(arr2);
  // check if arrays are equal
  return result1.join('') === result2.join('');
}
