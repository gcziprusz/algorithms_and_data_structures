var connectSticks = function(sticks) {
    let merged = [],minCost=0;
    let sorted = sticks.sort((a,b) => a-b);
    if(sticks.length < 2) return minCost;
    
    while(merged.length > 1 || sorted.length){
        let first,second;
        if(!merged.length ||  sorted[0] <= merged[0]){
           first = sorted.shift();
        } else {
           first = merged.shift();
        }
         if(!merged.length ||  sorted[0] <= merged[0]){
           second = sorted.shift();
        } else {
           second = merged.shift();
        }
        let newStick = first+second;
        merged.push(newStick);
        minCost+=newStick;
    }
    return minCost;
}
