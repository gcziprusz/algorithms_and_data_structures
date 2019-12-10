/**
 * @param {string} digits
 * @return {string[]}
 */
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



var backtrack = function(output, accumulator, nextDigit) {
    if(nextDigit.length === 0){
        output.push(accumulator);
    }
    else{
        // get next digit
        var digit = nextDigit.substring(0,1);
        // get letters associated with current digit
        var letters = phone[digit];
        // loop over letters 
        for(var i=0;i < letters.length;i++){
            var letter = letters.substring(i,i+1);
            backtrack(output,accumulator+letter, nextDigit.substring(1));
        }
            
        // reecurse with added letter to accumulator + kovetkezo digit
    }
}


var letterCombinations = function(digits) {
    var output = [];
    if(digits.length !== 0) {
        backtrack(output, "",digits);
    }
    return output;
        
};




/**
 * FASTER SOLUTION
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if (!digits) return [];
    
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    
    const answer = [];
    
    const recurse = str => {
        
        if (str.length === digits.length) {
            answer.push(str);
            return;
        }
        
        let chars = map[digits[str.length]];
        
        for (let i = 0; i < chars.length; i++) {
            recurse(str + chars[i]);
        }
    }
    
    recurse('');
    
    return answer;
};
