var mostCommonWord = function(paragraph, banned) {
    //Split the paragraph into an array of words in lowercase
    const words = paragraph.toLowerCase().split(/\W/);
    //Create a map to act as histogram of words
    const mp = Object.create(null);
    //Filter out empty strings and make the histogram
    words.filter(x => x).map(x => mp[x] = x in mp ? mp[x] + 1 : 1);
    //Rather than deleting banned words, just set its value to a negative number
    banned.map(x => mp[x] = -1)
    //Return the word with the highest count in the histogram
    return Object.keys(mp).reduce((a, b) => mp[a] > mp[b] ? a : b);
};



// Similar solution using a js Map
var mostCommonWord = function(paragraph, banned) {
    var h = new Map();
    paragraph
        .toLowerCase()
        .split(/\W/)
        .filter(w => w)
        .forEach(w=> h.set(w,h.get(w) ? h.get(w)+1:1));
    banned.map(w => h.set(w,-1));
    return Array.from(h.keys())
        .reduce((a,c) => h.get(a) > h.get(c) ? a:c);
};
