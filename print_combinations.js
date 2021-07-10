function printCombinations(map, n){
    let results = new Set();
    for(let [k,v] of map){
        //calculate all possible results which are valid(>0)
        let sums = new Map(),result = n - v,factor = 1;
        while(result >= 0 ){
            sums.set(factor,result);
            factor++;
            result -= v;
        }
        //nested for loop on the same map
        for(let [k1,v1] of map){
            if(k!==k1) {
                for (let [sumk,sumv] of sums) {
                    let res = sumv / v1;
                    //if res is an integer we have found the match.
                    if (res == Math.round(res) && res > 0) {
                        // to build a string without concatination.
                        results.add(`${k1}*${Math.round(res)}+${k}*${sumk}`);
                    }
                }
            }
        }
    }
    for(let rString of results){
        console.log(rString);
    }
}
let values = new Map([["flag", 4.5],["temp", 2],["foo", 9]]);
printCombinations(values,11);
