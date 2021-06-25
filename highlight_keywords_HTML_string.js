// highlight keywords in HTML string
function highlightKeywords(html, keywords) {
  // your code here
  const regexp = new RegExp(keywords.join('|'), 'gi');
  return html.split(' ').map((word) => {
    if (keywords.includes(word)) return `<em>${word}</em>`;
    return word.replace(regexp, (w) => `<em>${w}</em>`).replace('</em><em>', '');
  }).join(' ');
};
