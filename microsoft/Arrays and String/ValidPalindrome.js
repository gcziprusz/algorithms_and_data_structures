/**
Using a reverse method (naive)
Plain English Explanation
The solution below is straightforward and concise, however, the purpose of this
exercise is to gain experience with applying a particular technique, explained
further in the second solution and as such, it is probably in your best interest
to focus on that one when preparing for interviews.

Both solutions utilize a regular expression to assist with our task,
specifically to validate if a character is or is not an alphanumeric character,
meaning anything besides !@#$%^&*()-<>:"? for example. We can replace invalid
characters with an empty string or perform a test on each char and skip it
(increment left or decrement right).

After cleaning the string, we split it into individual characters which
depending on language, typically returns an array. Next, we call a reverse
method on the character array and join the result into a string.

The last step is to return an expression which:

calls a toLowerCase method on the cleaned string and reversedAndCleaned
string
check for equality
Code

 *
 * @param {string} s
 * @return {boolean}
 *
 * Runtime: 68ms
 * Memory: 38.6 MB
 *
 */
var isPalindrome = function(s) {
  var cleaned = s.replace(/\W/g, "");
  var reversedAndCleaned = cleaned
    .split("")
    .reverse()
    .join("");

  return cleaned.toLowerCase() == reversedAndCleaned.toLowerCase();
};



/**
Two Pointers
Plain English Explanation
As mentioned in the first solution, we perform some similar steps in this
solution to get a cleaned string and we will not repeat those steps in this
commentary.

Rather than reversing the entire character array followed by comparing
individual characters, we can apply the two pointers technique by checking for
inequality of each character.

Since the directions state that an empty string is true, we include a check
for that. Next, we create cleaned by converting each char in s into an array
of lowercase characters and replacing all NON alphanumeric characters with an
empty string. The regular expression /\W/gm is like saying "match any NON-word
character".

We loop while the condition i < j holds true (our pointers converge towards
the center but we do not want them to pass each other) and check if the
$cleaned^i$ value is not equal to the $cleaned^j$ value, indicating an INVALID
palindrome.

If the above check is not true, we increment i and decrement j, both by 1 to
process the next two chars. If we exhaust the loop we can safely return true as
this is a valid palindrome.

Code

 * @param {string} s
 * @return {boolean}
 *
 * Runtime: 68ms
 * Memory: 38.6 MB
 */
var isPalindrome = function(s) {
  if (s.length == 0) {
    return true;
  }

  const regex = /\W/gm;
  const cleaned = [...s.toLowerCase().replace(regex, "")];

  let i = 0;
  let j = cleaned.length - 1;

  while (i < j) {
    if (cleaned[i] != cleaned[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};
/**
Alternative Solution Using two pointers
The solution below is a bit more verbose however I believe reading multiple
solutions to the same problem is beneficial to the learner.


 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // if s.length == 0 return true
  if (s.length == 0) {
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // First, ensure chars at left and right pointers are both "valid"
    // meaning they are alphanumeric
    if (isLetterOrDigit(s[left]) == false) {
      left++;
      continue;
    }

    if (isLetterOrDigit(s[right]) == false) {
      right--;
      continue;
    }

    // Once we have valid chars, we must compare them for equality.
    // if they are not equal, return false
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // continue manipulating pointers inward
    left++;
    right--;
  }

  // if the program reaches this point we can safely return true
  return true;
};

/**
 * Java-esque function which returns a boolean indicating if
 * a given char is either a letter or a digit.
 */
const isLetterOrDigit = function(ch) {
  // ^[a-zA-Z0-9_]
  // NOT letters or digits
  const regexp = /\W/;

  return !regexp.test(ch);
};
