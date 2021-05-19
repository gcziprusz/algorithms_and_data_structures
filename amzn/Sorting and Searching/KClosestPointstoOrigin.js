/** SORTING SOLUTION O(NlogN)
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a,b)=> (Math.pow(a[0],2)+Math.pow(a[1],2)) - (Math.pow(b[0],2)+Math.pow(b[1],2)));
    return points.slice(0,k);
};


/***QUICK SELECT O(N)****/
var kClosest = function(points, K) {
    quickSelect(points, K, 0, points.length - 1);
    return points.slice(0, K);
};

function quickSelect(points, K, low, high) {
    const partPoint = partition(points, low, high);
    
    if (partPoint === K - 1) {
        return;
    }
    if (partPoint < K - 1) {
        quickSelect(points, K, partPoint + 1, high);
    } else {
        quickSelect(points, K, low, partPoint - 1);
    }
}

function partition(points, low, high) {
    const pivot = points[high];
    let i = low;
    let j = low;
    while (i < high) {
        if (getDist(points[i]) < getDist(pivot)) {
            swap(points, i, j);
            j++;
        }
        i++;
    }
    swap(points, high, j);
    return j;
}

function getDist(point) {
    return Math.pow(point[0], 2) +Math.pow(point[1], 2);
}

function swap(arr, i, j) {
    [arr[i],arr[j]] =[arr[j],arr[i]];
}
