const countComponents = (n, edges) => {
    let edgeRoots = [...Array(n).keys()]; // 0,1,2,3,4 ...n
    
    let getRoot = (e) => {
        while(e !== edgeRoots[e]) e = edgeRoots[e];
        return e;
    }
    let connect = ([a,b]) => {
        let rootOfA = getRoot(a);
        let rootOfB = getRoot(b);
        edgeRoots[rootOfA]=rootOfB;
    }
    
    edges.forEach(connect);
    let res = new Set();
    for(let i =0;i<n;i++) {
        res.add(getRoot(i));
    }
    return res.size;
}
// 
