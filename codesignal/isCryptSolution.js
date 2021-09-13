function isCryptSolution(crypt, solution) {
    let dict = new Map(solution);
    let operand1 = [...crypt[0]].map(ch => dict.get(ch)).join('');
    let operand2 = [...crypt[1]].map(ch => dict.get(ch)).join('');
    let result  = [...crypt[2]].map(ch => dict.get(ch)).join('');
    return leadingZero(operand1)|| 
      leadingZero(operand2)||
      leadingZero(result)||
      parseInt(operand1,10)+parseInt(operand2,10)!==parseInt(result,10) ? false:true;
}
let leadingZero = s => s.length>1 && s[0] === '0'; 
