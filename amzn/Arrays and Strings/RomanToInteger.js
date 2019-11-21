function romanToInt(num) {
  let roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let str = 0;
  
  for(let i=12; i >= 0; i--){
      while (num.indexOf(roman[i]) === 0){
          num = num.replace(roman[i],'');
          str += value[i];
      }
  }
  return str;
}
