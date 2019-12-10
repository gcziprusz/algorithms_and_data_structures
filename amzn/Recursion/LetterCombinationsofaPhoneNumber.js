  var phone = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

var output = [];

function backtrack( combination, next_digits) {
  // if there is no more digits to check
  if (next_digits.length === 0) {
    // the combination is done
    output.push(combination);
  }
  // if there are still digits to check
  else {
    // iterate over all letters which map 
    // the next available digit
    var digit = next_digits.substring(0, 1);
    var letters = phone[digit];
    for (var i = 0; i < letters.length; i++) {
      var letter = phone[digit].substring(i, i + 1);
      // append the current letter to the combination
      // and proceed to the next digits
      backtrack(combination + letter, next_digits.substring(1));
    }
  }
}

function letterCombinations(digits) {
  if (digits.length !== 0)
    backtrack("", digits);
  return output;
}

console.log("letterCombinations",JSON.stringify(letterCombinations("23")) === JSON.stringify(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]));


