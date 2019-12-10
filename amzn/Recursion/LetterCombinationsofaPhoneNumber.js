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
