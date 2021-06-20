function median(nums1, nums2) {
  let len = nums1.length + nums2.length,isOdd=len%2;
  let nums =[];
  let i1=0,i2=0;
  while(nums.length < len){
    if(nums1[i1] < nums2[i2] || i2 >=nums2.length) nums.push(nums1[i1++])
    else if(nums1[i1] >= nums2[i2]|| i1 >=nums1.length) nums.push(nums2[i2++])
  }
  let median = isOdd ? nums[Math.floor(len/2)] : (nums[len/2-1]+nums[len/2])/2
  return median;
}
