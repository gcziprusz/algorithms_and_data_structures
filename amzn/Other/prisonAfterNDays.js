var prisonAfterNDays = function(cells, N) {
    let nextDay = function(cells) {
        let newPrison = "";
        for (let i=0;i<cells.length;i++) {
            if (cells[i-1]==cells[i+1]) newPrison+='1';
            else newPrison+='0';
        }
        return newPrison;
    }
    let prison = [...cells].join('');
    let history = [];
    while (N--) {
        prison = nextDay(prison);
        let lookUp = history.indexOf(prison); // cycle found, get the cycle position
        if (lookUp!=-1) {
            let mod = N%(history.length - lookUp); // check how many extra moves after the cycle
            return history[lookUp + mod].split('');
        }
        history.push(prison);
    }
    return prison.split('');
};


/*** EASIER TO GROK ***/
function nextDay(prisonState){
    let prisonOnNextDay = '';
    for(let i =0 ; i< prisonState.length ; i++){
        if(prisonState[i-1] === prisonState[i+1]) prisonOnNextDay +='1';
        else prisonOnNextDay +='0';
    }
    return prisonOnNextDay;
}
function prisonAfterNDays(cells, N) {
    let  seen = new Map(), cycle = false, cycleLen=0, p=cells.join("");
    while(N > 0) {
        if(!cycle){
            if(seen.has(p)) {
                cycleLen = seen.get(p)-N;
                N%=cycleLen;
                cycle=true;
            } else seen.set(p,N)
        }
        if(N>0) {
            N -=1;
            p = nextDay(p);
        }
    }
    return p.split("");
}
