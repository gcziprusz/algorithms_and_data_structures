var myAtoi = function(str) {
    str = str.trim();
    var num = 0;
    var baseCharCode = '0'.charCodeAt(0);
    var sign = str[0] === '-'? -1:1;
    var MAX = Math.pow(2,31) - 1;
    var MIN = -Math.pow(2,31);
    
    if(str[0]==='+'||str[0]==='-' ) str =str.substring(1)
    
    for(var i = 0; i < str.length; i++) {
        var charCode = str[i].charCodeAt(0) - baseCharCode;
        
        if(0 <= charCode && charCode <= 9) {
            num = num*10 +charCode;
        } else {
            break;
        }
    }
    
    num = sign*num;
    
    return num<=MIN?MIN:num>=MAX?MAX:num;
};
console.log(myAtoi("42") === 42);
console.log(myAtoi("   -42") === -42);
console.log(myAtoi("4193 with words") === 4193);
console.log(myAtoi("words and 987") === 0);
console.log(myAtoi("-91283472332") === -2147483648);
