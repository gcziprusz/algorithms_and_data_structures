/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    
    var L = new Array(len);
    var R = new Array(len);
    var result = new Array(len);
    
    //build a product array products of left of i
    L[0] = 1;
    for(var i = 1;i < len ;i++){
        L[i] = nums[i-1]* L[i-1];
    }
    //build a product array products of right of i
    R[len-1] = 1;
    for(var i = len - 2;i >= 0 ;i--){
        R[i] = nums[i+1] * R[i+1];
    }
    // calculate the product of L and R arrays 
    for(var i = 0; i < len ; i++){
        result[i] = L[i] * R[i];
    }
    return result; 
};


/**
 * CONSTANT SPACE SOLUTION BY REUSING ARRAY
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var len = nums.length;
    
    var result = new Array(len);
    
    //build a product array products of left of i
    result[0] = 1;
    for(var i = 1;i < len ;i++){
        result[i] = nums[i-1]* result[i-1];
    }
    //build a product array products of right of i
    R = 1;
    for(var i = len - 1;i >= 0 ;i--){
        result[i] = result[i] * R;
        R *= nums[i]
    }
    return result; 
};
