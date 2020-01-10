// time: O(N^2); space: O(1)
var threeSumClosest = function(nums, target) {
    let len = nums.length
        
    nums.sort((a, b) => a - b)
    
    let result = nums[0] + nums[1] + nums[2]

    for(let i = 0; i< len - 2 ; i++) {
        let j = i + 1
        let k = len - 1
        
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            let dif = sum - target
            if (Math.abs(sum - target) < Math.abs(result - target)){
                result = sum
            }
            if (dif < 0) {
                j++
            } else if (dif > 0) {
                k--
            } else if (!dif) {
                return target
            }   
        }
    }
    
    return result
};
