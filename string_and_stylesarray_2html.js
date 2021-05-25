let hml = toHTML('Hello, World',[[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]);


console.log("res",hml);

function toHTML(word, styles){
    let chars = [...word];
    let styledArray = styles.reduce(function(chars,[s,e,t]){
      chars[s] = `<${t}>${chars[s]}`;
      chars[e] += `</${t}>`;
      return chars;
    },chars);
    return styledArray.join("");
}


