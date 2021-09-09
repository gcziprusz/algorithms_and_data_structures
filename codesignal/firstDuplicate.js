function firstDuplicate(a) {
   let hs = new Set();
    
    for(let n of a){
        if(hs.has(n))
            return n;
        else 
            hs.add(n);
    }
    return -1;
}
