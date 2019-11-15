var LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
    if(num === 0) {
        return 'Zero';
    }
    var thousandCounter = 0;
    var result = '';
    
    while(num > 0) {
        if(num % 1000 !== 0) {
            result = numToString(num % 1000) + THOUSANDS[thousandCounter] + ' ' + result;
        }
        num /= 1000;
        num = Math.trunc(num);
        thousandCounter++;
    }
    return result.trim();
};

function numToString(num) {
    if (num === 0)
        return '';
    else if (num < 20)
        return LESS_THAN_20[num] + " ";
    else if (num < 100)
        return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
    else
        return LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100);
}
