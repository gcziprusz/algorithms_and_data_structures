/** BRUTE FORCE **/
var numPairsDivisibleBy60 = function(time) {
    let count =0;
    for(let i =0;i< time.length;i++){
        for(let j = i+1;j<time.length;j++){
            if((time[i] + time[j]) % 60 === 0) count++;
        }
    }
    return count;
};



function numPairsDivisibleBy60(time) {
    let remainders = new Array(60).fill(0);
    let count = 0;
    for (let t of time) {
        if (t % 60 == 0) { // check if a%60==0 && b%60==0
            count += remainders[0];
        } else { // check if a%60+b%60==60
            count += remainders[60 - t % 60];
        }
        remainders[t % 60]++; // remember to update the remainders
    }
    return count;
}
