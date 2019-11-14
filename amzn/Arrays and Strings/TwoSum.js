var twoSum = function(nums, target) {
  var stash = new Map();
  
  for(var i =0; i < nums.length; i++){
    //  4 =  9 - 5; 
    var compliment = target - nums[i];
    if(stash.has(compliment)){
      return [stash.get(compliment),i]
    }
    stash.set(nums[i],i)
  }
}
