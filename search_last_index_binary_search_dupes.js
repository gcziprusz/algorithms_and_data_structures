function lastIndex(arr, target){
  let start = 0
  let end = arr.length - 1
  let lastIndex = -1

  while(start <= end ) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) {
      lastIndex = mid
      start = mid + 1
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid -1
    }
  }

  return lastIndex
}
