/* 2 pointer solution */
function intersect(arr1, arr2) {
  let p1 = 0
  let p2 = 0
  let result = []

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1])
      p1 += 1
      p2 += 1
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1 += 1
      } else {
        p2 += 1
      }
    }
  }

  return result
}

/*similar approach with reverse and pop */
function intersect(arr1, arr2) {
  arr1.reverse()
  arr2.reverse()

  const result = []

  while (arr1.length > 0 && arr2.length > 0) {
    const top1 = arr1[arr1.length - 1]
    const top2 = arr2[arr2.length - 1]

    if (top1 === top2) {
      result.push(top1)
      arr1.pop()
      arr2.pop()
    } else if (top1 < top2) {
      arr1.pop()
    } else {
      arr2.pop()
    }
  }

  return result
}
