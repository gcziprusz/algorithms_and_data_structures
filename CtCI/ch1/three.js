function encodeSpaces(url) {
  if(!url || url.length < 1) return '';
  let spaceCount = url.reduce((a,c) => c === ' ' ? a+=1:a,0);
  let newLen = url.length-1+2*spaceCount;
  for(let i = url.length-1,j=newLen;i>=0&&j>i;i--,j--){
    if(url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    } 
    else url[j]=url[i];
  }
  return url.join('');
}

[
      'nospaces',
      ' ',
      '   ',
      ' firstSpace',
      'lastSpace ',
      '  surroundedBySpaces  ',
      'middle  spaces',
      ' l o t s   o f   s p a c e ',
      'http://www.google.com/',
      'http://www.google.com/search?q=something really really funny'
    ].forEach(arg => {
        let expected = arg.replace(/ /g, '%20');
        console.assert(encodeSpaces(arg.split('')) === expected);
});
       
