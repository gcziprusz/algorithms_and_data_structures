var isAlienSorted = function(words, order) {
    let map = {};
    for(let i = 0; i < order.length; i += 1){
        map[order[i]] = i
    }
    
    for(let i = 1; i < words.length; i += 1) {
        let prev = words[i-1], curr = words[i];
        if(map[prev[0]] > map[curr[0]]) return false
        else if(prev[0] === curr[0]){
            let pointer = 0;
            while(prev[pointer]===curr[pointer] && pointer < prev.length - 1) pointer++
            if(!curr[pointer] || map[prev[pointer]] > map[curr[pointer]]) return false
        }
    }
    
    return true
};
