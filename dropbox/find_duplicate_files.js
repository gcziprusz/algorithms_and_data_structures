var findDuplicate = function(paths) {
    let m = new Map();
    for(let p of paths){
        let v = p.split(" ");
        for(let i =1; i<v.length;i++){
           let nc = v[i].split("(");
            nc[1] = nc[1].replace(")","");
            let list = m.get(nc[1]) || [];
            list.push(v[0]+"/"+nc[0]);
            m.set(nc[1],list);
           }
    }
    let res = new Array();
    for(let [k,v] of m){
        if(v.length >1) res.push(v);
    }
    return res;
};
