// https://leetcode.com/problems/string-compression/submissions/

// leet 443. String Compression 

var compress = function(chars) {
    let count =1;
    for(let i =1;i<=chars.length;i++){
        if(chars[i] === chars[i-1]){
            count++;
        } else if(count>1){
            let countArr = count.toString().split('');
            let deleted = chars.splice(i-count+1,count-1,...countArr);
            i = i-deleted.length+countArr.length;
            count=1;
        }
    }
    return chars.length;
};
