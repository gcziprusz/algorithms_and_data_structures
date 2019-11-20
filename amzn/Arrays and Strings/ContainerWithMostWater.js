/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var maxarea = 0, l=0,r=height.length-1;
    while(l<r){
        if (height[l] > height[r]){
            maxarea = Math.max(maxarea,(r-l)*height[r--]);
        } else {
            maxarea = Math.max(maxarea, (r-l)*height[l++]);
        }
    }
    return maxarea;
};
