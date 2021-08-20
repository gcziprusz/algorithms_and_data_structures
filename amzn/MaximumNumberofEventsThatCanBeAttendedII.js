

function maxValue(events,k){
    events = events.sort(([a],[b]) => a-b)
    let n = events.length;
    function dp(i,k){
        if(i===0 || k===0) return 0;
        // not attend event i
        ans = dp(i+1,k)

        nextI = searchLeft(events,events[i][1]+1)
        ans = Math.max(ans,events[i][2])
    }
    return dp(0,k)
}
