/**
 * @param {any} data
 * @returns {string}
 */
function detectType(data) {
  let tag = Object.prototype.toString.call(data)  // '[object Undefined]'
  tag = tag.slice(1,-1).split(" ")[1].toLowerCase();
  
  const whitelist = new Set([
    'number',
    'null',
    'string',
    'undefined',
    'bigint',
    'symbol',
    'boolean',
    'array',
    'arraybuffer',
    'date',
    'function',
    'map',
    'set'
    ])
  
  if (whitelist.has(tag)) {
    return tag
  }
  return 'object'
}
