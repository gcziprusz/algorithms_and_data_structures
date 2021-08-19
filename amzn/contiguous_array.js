function findMaxLength(nums) {
  // Map is used to store the prefix sum as the array is traversed.
  // If a previously seen prefix sum is encountered, it means that the
  // subarray between the recorded index and the current index is balanced.
  // That subarray length can be calculated by subtracting the recorded index from the current index.
  const map = new Map();
  
  // If we encounter a 0 prefix sum, it means that the entire array up to that index is balanced.
  map.set(0, -1);
  
  let maxLen = 0;
  let prefixSum = 0; // (running total: +1 for 1's, -1 for 0's)
  
  for (let i = 0; i < nums.length; ++i) {
    prefixSum += nums[i] || -1;
    
    if (map.has(prefixSum)) maxLen = Math.max(maxLen, i - map.get(prefixSum));
    
    // Only set index of prefix sum if it is the FIRST time it is seen.
    // We want the maximum length subarray, so all subsequent encounters of the
    // same prefix sum should be calculated as a possible maximum subarray.
    else map.set(prefixSum, i);
  }
  
  return maxLen;
}
