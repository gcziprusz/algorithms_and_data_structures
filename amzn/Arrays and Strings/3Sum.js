// BRUTE
var threeSum = function(nums) {
    nums.sort();
    var unique =[];
    var len = nums.length;
    for(var i =0;i < len;i++){
        if(i > 0 && nums[i] === nums[i-1]) continue;
     for(var j =i+1;j < len;j++){
       if(j > i+1 && nums[j] === nums[j-1]) continue;
        for(var k =j+1;k < len;k++){
          if(k > j+1 && nums[k] === nums[k-1]) continue;
            if(nums[i] + nums[j] + nums[k] === 0){
              unique.push([nums[i] , nums[j] ,nums[k]]);
            }
        }   
     }   
    }
    return unique;
};
