let findAllConcatenatedWordsInADict = (words) => {
    let dict = new Set(words);
    
    let isConcat = (word)=> {
        if(dict.has(word)) return true;
        for(let i =0;i< word.length;i++){
            let prefix = word.slice(0,i+1);
            if(dict.has(prefix)){
                let suffix = word.slice(i+1);
                let match = isConcat(suffix);
                if (match){
                    dict.add(word);
                    return true;
                }
            }
        }
        return false
    };
    
    let res =[];
    for(let word of words){
        dict.delete(word);
        if(isConcat(word)) res.push(word);
        dict.add(word)
    }
    return res;
}
