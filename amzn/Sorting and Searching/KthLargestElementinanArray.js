/**Easiest sort and index into the array **/
var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => b-a)[k-1];
};

/* min heap or max heap */
var findKthLargest = function(nums, k) {
    
    // ============ Min Heap Class
    class MinHeap {
        
        constructor(capacity) {
            this.capacity = capacity;
            this.value = [];
        }
        
        add(val) {
            this.value.push(val);
            this.bubbleUp(this.value.length-1);
            if(this.value.length > this.capacity) this.remove();
        }
        
        remove() {
            this.swap(0, this.value.length-1);
            const min = this.value.pop();
            this.trickleDown(0);
            return min;
        }
        
        bubbleUp(idx) {
            const parent = Math.floor((idx-1)/2);
            let max = idx;
            
            if(parent >= 0 && this.value[parent] > this.value[max]) max = parent;
            
            if(max !== idx) {
                this.swap(max, idx);
                this.bubbleUp(max);
            }
        }
        
        trickleDown(idx) {
            const leftChild = 2 * idx + 1;
            const rightChild = 2 * idx + 2;
            let min = idx;
            
            if(leftChild < this.value.length && this.value[leftChild] < this.value[min]) min = leftChild;
            if(rightChild < this.value.length && this.value[rightChild] < this.value[min]) min = rightChild;
            
            if(min !== idx) {
                this.swap(min, idx);
                this.trickleDown(min);
            }
        }
        
        swap(i, j) {
            [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
        }
    }
    // ==============
    
    const minHeap = new MinHeap(k);
    
    for(let n of nums) minHeap.add(n);
    
    return minHeap.remove();
};





/***QUICK SELECT MY VERSION**/
var findKthLargest = function(nums, k) {
    return quickselect(nums,0,nums.length-1);

    function quickselect(arr,start,end){
        let mid = partitition(arr,start,end);
        if(k < arr.length - mid){
            return quickselect(nums,mid+1,end);
        } else if(k > arr.length - mid){
            return quickselect(nums,start,mid-1);       
        }
        return nums[mid];
    };
};
var partitition = function(arr,start,end){
    i = start;
    j = start;
    pivot = arr[end];
    
    for(let j = start;j<end;j++){
        if(arr[j] <= arr[pivot]) {
            swap(arr,i,pivot);
            i++;
        }
    }
    swap(i,pivot);
    return i;
};
var swap = function(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}




/* quick select */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);
    /**
     * Use pivotIndex as the seperater. If k is smaller than the length of the 
     * right side of the array, the target is in the right side of the array. 
     * If k is larger, the target is in the left side of the array. 
     */
    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }
    // pivotIndex is the index of the target if k equals to the length of the 
    // right side of the array.
    return arr[pivotIndex];
};

function partition(arr, start, end) {
    /**
     * Use the last element as pivot for simplicity. Randomized pivot 
     * is a better way to avoid worst case where the the largest or the smallest 
     * element is always selected.
     */
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    // move all numbers smaller than pivot to the left and larger to the right
    while(i <= j) {    
        while (arr[i] < pivot) {
            i += 1;
        } 
        while (arr[j] > pivot) {
            j -= 1;
        }
        if(i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }   
    }
    // Swap pivot value to the position so that all numbers larger than pivot value 
    // is on the right, and smaller on the left.
    swap(arr, i, end);
    // return the final index where the pivot value is.
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
/*alternative quick select*/
var findKthLargest = function(nums, k) {
    // the final position of the kth largest number in a sorted array
    const finalIdx = nums.length - k;
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right) {
        // random num between left and right
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;
        // the final position of the pivot in a sorted array        
        const pivotIdx = pivotHelper(pivot, left, right);
        // the target number is in its correct postion, thus return
        if(pivotIdx === finalIdx) return nums[finalIdx];
        
        // if pivotIdx is smaller we undershot, so look only on the right half
        if(pivotIdx < finalIdx) left = pivotIdx + 1;
        // else we overshot, so look only on the left half
        else right = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        // move the pivot to the end (get it out of the way)
        swap(pivot, end);
        
        let i = start;
        let j = start;
        
        // move smaller nums to the begining of the array
        while(j < end) {
            if(nums[j] <= nums[end]) {
                swap(i, j);
                i++;
            } 
            j++;
        }
        // swap pivot to its final position
        swap(i, end);
        return i;
    }
    
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
};
