// can I have duplicates in the array???
// whats the minimum length of the array???  
// console.log("missingNumber",missingNumber([1,1,1,1,1])); ???
// console.log("missingNumber",missingNumber([0,0,0,0,0,0,0,0])); ???

// Sorting solution

function missingNumber(nums) {
    var size = nums.length;
    //sort array
    nums.sort((a,b) => a-b);
    
    // assert starts with zero
    if(nums[0] != 0){
       return 0;
    }
    
    // assert that last elment matches the array size
    if(nums[size -1] != size){
       return size;
    }
    
    // loop over array 
    // 1 calculate expected next val 
    // if not found return it
    for(var i =1 ;i < size ;i++){
        var expected = nums[i-1]+1;
        if(expected !== nums[i]){
            return expected; // missing   
        }
    }
    return -1;
}
