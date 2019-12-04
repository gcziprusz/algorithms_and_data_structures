/**
 * BRUTE FORCE approach of solving Trapping Rain Water problem.
 *
 * @param {number[]} terraces
 * @return {number}
 */
function bfRainTerraces(terraces) {
  let waterAmount = 0;

  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
    // Get left most high terrace.
    let leftHighestLevel = 0;
    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }

    // Get right most high terrace.
    let rightHighestLevel = 0;
    for (let rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex += 1) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    // Add current terrace water amount.
    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      // Terrace will be able to store the water if the lowest of two left and right highest
      // terraces are still higher than the current one.
      waterAmount += Math.min(leftHighestLevel, rightHighestLevel) - terraces[terraceIndex];
    }
  }

  return waterAmount;
}
console.log("bfRainTerraces",bfRainTerraces([0,1,0,2,1,0,1,3,2,1,2,1]) === 6 )

// optimized save left max and right max values
var trap = function(heights) {
    var totalTrappedWater = 0;
    var size = heights.length;
    
    var lm = new Array(size);
    var rm = new Array(size);
    
    lm[0] = heights[0];
    for(var i = 1;i < size;i++){
        lm[i] = Math.max(heights[i],lm[i-1]);
    }
    // figure and store left max values
    // figure and store right max values
    rm[size-1] = heights[size-1];
    for(var j = size -2;j >= 0;j--){
        rm[j] = Math.max(heights[j],rm[j+1]);
    }
    
    // zip over heights:
    for(var c = 1;c < size-1;c++){
        totalTrappedWater += Math.min(rm[c],lm[c]) - heights[c]
    }
        // figure ledge size 
        // substract current height
        // add up to totalTrappedWater +=
    
    return totalTrappedWater;
};
