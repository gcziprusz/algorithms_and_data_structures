
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(0, h);
    verticalCuts.push(0, w);
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    let hMax = 0, vMax = 0;
    for (let i = 1; i < verticalCuts.length; i++) {
        hMax = Math.max(hMax, verticalCuts[i] - verticalCuts[i - 1]);
    }
    for (let i = 1; i < horizontalCuts.length; i++) {
        vMax = Math.max(vMax, horizontalCuts[i] - horizontalCuts[i - 1]);
    }
    return BigInt(hMax) * BigInt(vMax) % 1000000007n
};
