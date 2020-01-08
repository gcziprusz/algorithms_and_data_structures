  //Hash table that takes care of the mappings.
  var mappings = new Map();

  // Initialize hash map with mappings. This simply makes the code easier to read.
  mappings.set(')', '(');
  mappings.set('}', '{');
  mappings.set(']', '[');

function isValid(s) {
  // Initialize a stack to be used in the algorithm.
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    // If the current character is a closing bracket.
    if (mappings.has(c)) {
      // Get the top element of the stack. If the stack is empty, set a dummy value of '#'
      var topElement = stack.length === 0 ? '#' : stack.pop();
      // If the mapping for this bracket doesn't match the stack's top element, return false.
      if (topElement != mappings.get(c)) {
        return false;
      }
    } else {
      // If it was an opening bracket, push to the stack.
      stack.push(c);
    }
  }
  // If the stack still contains elements, then it is an invalid expression.
  return stack.length === 0;
}
