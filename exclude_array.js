// could be potentially more than 3 keys in the object above
// items = [
// {color: 'red', type: 'tv', age: 18},
// {color: 'silver', type: 'phone', age: 20}
// ...
// ]

// excludes = [
// {k: 'color', v: 'silver'},
// {k: 'type', v: 'tv'},
// ....
// ]


/* O(MN) solution*/
function excludeItems(items, excludes) {
excludes.forEach(pair => {
items = items.filter(item => item[pair.k] === item[pair.v]);
});
return items;
}



function excludeItems(items, excludes) {
  // m k n
  // n * m
  
  // change exclude to Map<key, Set<value>>
  // m * k * 1
  
  // preprocess excludes array
  // avoid multiple for loop on items
  
  const excludeMap = new Map()
  for (let {k, v} of excludes) {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set())
    }
    excludeMap.get(k).add(v)
  }
  
  return items.filter(item => {
    return Object.keys(item).every(
      key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  })
}
