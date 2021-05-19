/** SORTING SOLUTION
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a,b)=> (Math.pow(a[0],2)+Math.pow(a[1],2)) - (Math.pow(b[0],2)+Math.pow(b[1],2)));
    return points.slice(0,k);
};
