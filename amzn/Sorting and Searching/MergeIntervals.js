function merge(intervals) {
  // if no intervals return
  if (!intervals.length) return intervals;
    // sort the intervals
  intervals.sort((a, b) => a[0] - b[0]);
  
  
  let prev = intervals[0];
  let res = [prev];
    
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}


/**ALTERNATIVE SORTING*/
function merge(intervals){
    intervals.sort((a,b) => a[0]-b[0]);
    let p =intervals.shift();
    let res =[p];

    for(let [cStart,cEnd] of intervals){
        let [pStart,pEnd] = res[res.length-1];
        if(cStart <= pEnd){
            res[res.length-1][1] = Math.max(cEnd,pEnd);
        } else{
            res.push([cStart,cEnd]);
        }
    }
    return res;
}
