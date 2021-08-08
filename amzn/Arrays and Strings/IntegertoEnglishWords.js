/*CLEAN and CONCISE*/
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  if (num <= 20) return translations.get(num);
  let result = [];
  for (let [value, translation] of translations) {
    const times = Math.floor(num / value);
    if (times === 0) {
      continue;
    }
    num -= times * value;
    if (times === 1 && value >= 100) {
      result.push('One', translation);
      continue;
    }
    if (times === 1) {
      result.push(translation);
      continue;
    }
    result.push(numberToWords(times), translation);
  }
  return result.join(' ');
};
const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);



/*works but kinda messy with lots of edge cases*/

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


/** SHORTER MAGICAL ALTERNATIVE USING REGEX **/

function doConvert (numberInput){
    let oneToTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
    'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let tenth = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if(numberInput.toString().length > 7) return 'overlimit' ;
    console.log(numberInput);
    let num = ('0000000'+ numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if(!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' million ' : ''; 
  
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+'hundred ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`)+' thousand ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) +'hundred ': ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : ''; 

   return outputText;
}
