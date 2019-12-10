/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var v1array = version1.split(".").map(Number);  
  var v2array = version2.split(".").map(Number);

    if(v1array.length > v2array.length){
        while(v1array.length > v2array.length){
        v2array.push(0);      
        }
    }
    if(v2array.length > v1array.length){
        while(v2array.length > v1array.length){
        v1array.push(0);      
        }
    }
    
    var v1Num = parseInt(v1array.join(""));
    var v2Num = parseInt(v2array.join(""));
    return v1Num > v2Num ? 1 : v1Num < v2Num ? -1 : 0;
};



/**
 * FASTER SOLUTION SIMILAR IDEA
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    let length = v1.length > v2.length ? v1.length : v2.length;
    
    for (let i=0; i<length; i++) {
        v1[i] = v1[i] == undefined ? 0 : parseInt(v1[i]);
        v2[i] = v2[i] == undefined ? 0 : parseInt(v2[i]);
    }
    
    for (let i=0; i<length; i++) {
        if (v1[i] < v2[i]) return -1;
        if (v1[i] > v2[i]) return 1;
    }
    
    return 0;
};

