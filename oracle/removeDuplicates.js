// Using a stack
let removeDuplicates = function(s,k) {
    let [firstChar,...restChars] = [...s],stack = [[firstChar,1]];
    for(let ch of restChars){
        let [top,count] = stack && stack.length ? stack[stack.length-1] :[];
        if (top === ch && count === k-1) {
            Array.from(Array(k-1)).forEach(() => stack.pop());
        } else if (top === ch ){
            stack.push([ch,count+1])
        } else {
             stack.push([ch,1])
        }
    }
    return stack.map(e=>e[0]).join('');
}

// counting approach
let removeDuplicates = function(s,k) {
    let res = [...s];
    let length = -1;
    
    while(length !== res.length) {
        length = res.length;
        for (let i = 0, count = 1; i < res.length; ++i) {
            if (i === 0 || res[i] !== res[i - 1]) {
                count = 1;
            } else if (++count === k) {
                res.splice(i - k + 1, count);
                break;
            }
        }
    }
    return res.join('');
}
