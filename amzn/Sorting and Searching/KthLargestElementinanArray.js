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
/* quick select */
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
