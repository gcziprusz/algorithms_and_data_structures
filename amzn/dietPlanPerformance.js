var dietPlanPerformance = function(calories, k, lower, upper) {
    let points = 0;
    let tot = 0; // total calories consumed for the k consecutive days
    
    for (let i = 0; i < calories.length; i++) {
        tot += calories[i];
        
        if (i + 1 < k) continue;
        if (i + 1 > k) tot -= calories[i - k];
        
        if (tot < lower) points--;
        else if (tot > upper) points++;
    }
    
    return points;
};
