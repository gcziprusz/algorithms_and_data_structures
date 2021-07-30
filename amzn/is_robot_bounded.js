// ^ v < >

 // 3      |
 //2       |
 //1       |
 //0 - - - ^ - - -
 //-1      |
 //-2      |
 //-3      |

//  -3-2-1 0 1 2 3  

var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 1;

    for (let direction of instructions) {
        if (direction === "R") {
            let temp = dx;
            dx = dy;
            dy = -temp;
        } else if (direction === "L") {
            let temp = dy;
            dy = dx;
            dx = -temp;
        } else {
            x = x + dx;
            y = y + dy;
        }
    }
    return (!x && !y) || dy !== 1;
};


/******SHORTER ALTERNATIVE****/
var isRobotBounded = function(instructions) {
    let x = 0,y = 0,dx = 0,dy = 1;

    for (let direction of instructions) {
        if (direction === "R") {
            [dx,dy] = [dy,-dx]
        } else if (direction === "L") {
            [dy,dx] = [dx,-dy]
        } else {
            x += dx;
            y += dy;
        }
    }
    return (!x && !y) || dy !== 1;
};
