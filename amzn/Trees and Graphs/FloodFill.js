/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    // nested DFS funcion that take row and col, oldColor, numROws and numCols
    var DFS = function( r,c,oldColor,rows,cols){
      
      // is the r/c is out of bounds return
      if(r<0||r>=rows||c<0||c>=cols) return;
      // if the new pos is not the target old color return
      if(image[r][c] !== oldColor) return;
    
        // chnage to the new color
        image[r][c] = newColor;
       
        // directions recursive calls
        DFS(r+1,c,oldColor,rows,cols);
        DFS(r-1,c,oldColor,rows,cols);
        DFS(r,c+1,oldColor,rows,cols);
        DFS(r,c-1,oldColor,rows,cols);
    }
    // if the strating pos is already in the new color return original image
    if(image[sr][sc]===newColor) return image;
    // get the source / old color
    let oldColor = image[sr][sc];
    // figure row and col length to check inbounds
    let rows = image.length;
    let cols = image[0].length;
    // strat the DFS with coordinates, oldColor and row/col counts
    DFS(sr,sc,oldColor,rows,cols);
    // return the transformed image
    return image;
};


