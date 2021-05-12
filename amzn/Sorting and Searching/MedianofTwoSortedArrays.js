var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1)
    let x = nums1.length
    let y = nums2.length
    let low = 0, high = x
    while(low <= high) {
        const partitionX = (high + low) >> 1
        const partitionY = ((x + y + 1) >> 1) - partitionX
        
        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1]
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1]
        
        const minX = partitionX == nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX]
        const minY = partitionY == nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY ]
        
        if(maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY)
            if( (x + y) % 2 == 1)
                return lowMax
            return (lowMax + Math.min(minX, minY)) / 2
        } else if(maxX < minY) {
            low = partitionX + 1
        } else 
            high = partitionX - 1
    }
    
};


/**ALTERNATIVE FUND IT EASIER TO GROK*/
function findMedianSortedArrays(nums1, nums2) {
  const len = nums1.length + nums2.length;
  const nums = [];
  let l = 0, r = 0;
  // Merge arrays
  while (nums.length < len) {
    if (nums1[l] < nums2[r] || r >= nums2.length) {
      nums.push(nums1[l++]);
    }
    else if (nums1[l] >= nums2[r] || l >= nums1.length) {
      nums.push(nums2[r++]);
    }
  }
  // Calculate and return median
  return (len % 2
    ? nums[Math.floor(len / 2)]
    : (nums[len / 2 - 1] + nums[len / 2]) / 2);
};

/***alternative that may not meet big O requirement*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [].concat(nums1).concat(nums2);
    nums = nums.sort(function(a, b) {
        return a-b;
    });
    
    const length = nums.length;
    
    if (length % 2 == 0) {
        const index = Math.floor((length-1)/2);
        return (nums[index] + nums[index+1])/2;
    } else {
        return nums[(length-1) / 2]
    }
};
