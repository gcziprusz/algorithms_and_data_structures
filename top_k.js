// Time: O(nlogn)
// Space: O(1) or O(k)
function topK(arr: number[], k: number): number[] {
  return arr.sort((a, b) => a > b ? -1 : 1).slice(0, k);
}


import Heap from 'heap-js';
function topK(arr, k) {
  const minHeap = new Heap();
  arr.forEach(value => {
    minHeap.push(value) // O(logk)

    if (minHeap.length > k) {
      minHeap.pop()
    }  
  })

  return minHeap.toArray()
}
