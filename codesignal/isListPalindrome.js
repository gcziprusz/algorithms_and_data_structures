/* Clever String manipulation*/
function isListPalindrome(l) {
    if (!l) return true
    let t1 = ""
    let t2 = ""
    while (!!l) {
        t1 = l.value + t1
        t2 = t2 + l.value
        l = l.next
    }
    return t1 === t2
}

/* Use a stack */
function isListPalindrome(l) {
    let stack = [],curr=l;
    while(curr) {
        stack.push(curr.value)
        curr=curr.next;
    }
    
    while(l){
        let e =stack.pop();
        if(e !== l.value) return false;
        l=l.next;
    }
    return true;
}
