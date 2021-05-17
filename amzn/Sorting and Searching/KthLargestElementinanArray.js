/**Easiest sort and index into the array **/
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b-a)[k-1];
};

/* min heap or max heap */

/* quick select */
