// Time: O(nlogn)
// Space: O(1) or O(k)
function topK(arr: number[], k: number): number[] {
  return arr.sort((a, b) => a > b ? -1 : 1).slice(0, k);
}
