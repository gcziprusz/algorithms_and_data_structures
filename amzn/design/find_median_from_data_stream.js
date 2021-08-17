/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.size = function(num) {
    return this.nums.length;
}

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.size() === 0) {
        this.nums.push(num);
    } else {
        let idx = search(this.nums, num);
        this.nums.splice(idx, 0, num)
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.size() === 0) return 0;
    let isSizeEven = this.size() % 2 === 0;
    let mid = isSizeEven ? (this.size() / 2) : ((this.size() - 1) / 2);
    return isSizeEven ? (this.nums[mid] + this.nums[mid - 1]) / 2 : this.nums[mid];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

function search(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    
    if (num < arr[0]) return 0;
    
    if (num > arr[end]) return end + 1;

    let ans = -1; 
    
    while (start <= end) {
        const mid = start + ((end - start) >> 1);
        if (arr[mid] <= num) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }
    
    return ans + 1;
}
