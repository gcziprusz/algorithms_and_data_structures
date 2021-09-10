function rotateImage(a) {
    a.reverse();
    for(let r in a){
        for(let c =0;c<r;c++){
            [a[r][c],a[c][r]]=[a[c][r],a[r][c]];
        }
    }
    return a;
};
