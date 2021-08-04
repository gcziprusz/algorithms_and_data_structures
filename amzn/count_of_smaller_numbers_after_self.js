var countSmaller = function(nums) {
  let res = Array(nums.length);
  for(let i=0;i<nums.length;i++){
      for(let j = i+1;j<nums.length;j++){
         if(nums[j] < nums[i]) res[i] = (res[i] || 0)+1; 
      }
      res.push(0)
  }
  return res
};
