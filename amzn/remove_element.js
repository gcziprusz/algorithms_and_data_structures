// function removeElement(nums, val) {
// let j=0;
//     for(let i =0;i<nums.length;i++){
//         if(nums[i] === val) j++;
//     }
//     return j;
// }
function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

console.log(removeElement([3,2,2,3],3))
