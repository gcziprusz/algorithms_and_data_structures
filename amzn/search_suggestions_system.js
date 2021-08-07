
/*trie*/
// https://leetcode.com/problems/search-suggestions-system/

var suggestedProductsTrie = function(products, searchWord) {
    
    products.sort();
    
    let trie = {};
    for (let p of products) {
        let root = trie;
        for (let i=0;i<p.length;i++) {
            if (!root[p[i]]) root[p[i]] = {'sug':[]};
            if (root[p[i]]['sug'].length < 3) root[p[i]]['sug'].push(p);    
            root = root[p[i]];
        }
    }
    
    let root = trie, res = [];
    for (let i=0;i<searchWord.length;i++) {
        if (root) root = root[searchWord[i]];
        res.push(!root?[]:root['sug']);
    }
    
    return res;
};
/*Brute force */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res = [];
    for (let i=0;i<searchWord.length;i++) {
        products = products.filter((p)=>p[i]==searchWord[i]);
        res.push(products.slice(0, 3));
    }
    return res;
}
