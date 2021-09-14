function removeKFromList(l, k) {
    while(l&& l.value === k) l = l.next;
    
    if (!l) return l;
    
    let c = l;
    while(c.next){
        if (c.next.value === k) c.next = c.next.next;
        else c = c.next;
    }
    return l;
}
