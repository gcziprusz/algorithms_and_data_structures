/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
  if(str === '') {
    throw Error();
  }
  if(str[0] === "'") {
    throw Error();
  }
  if(str === 'null') {
    return null;
  }
  if(str === '{}') {
    return {};
  }
  if(str === '[]') {
    return [];
  }
  if(str === 'true') {
    return true;
  }
  if(str === 'false') {
    return false;
  }
  if(str[0] === '"') {
    return str.slice(1, -1);
  }
  if(+str === +str) {
    return Number(str);
  }
  if(str[0] === '{') {
    return str.slice(1, -1).split(',').reduce((acc, item) => {
      const index = item.indexOf(':');
      const key = item.slice(0, index)
      const value = item.slice(index + 1);
      acc[parse(key)] = parse(value);
      return acc;
    }, {});
  }
  if(str[0] === '[') {
    return str.slice(1, -1).split(',').map((value) => parse(value));
  }
}


/*** similar alternative with switch /
// /**
//  * @param {string} str
//  * @return {object | Array | string | number | boolean | null}
//  */
// function parse(str) {
//   if(str === '') {
//     throw Error();
//   }
//   if(str[0] === "'") {
//     throw Error();
//   }
//   if(str === 'null') {
//     return null;
//   }
//   if(str === '{}') {
//     return {};
//   }
//   if(str === '[]') {
//     return [];
//   }
//   if(str === 'true') {
//     return true;
//   }
//   if(str === 'false') {
//     return false;
//   }
//   if(str[0] === '"') {
//     return str.slice(1, -1);
//   }
//   if(+str === +str) {
//     return Number(str);
//   }
//   if(str[0] === '{') {
//     return str.slice(1, -1).split(',').reduce((acc, item) => {
//       const index = item.indexOf(':');
//       const key = item.slice(0, index)
//       const value = item.slice(index + 1);
//       acc[parse(key)] = parse(value);
//       return acc;
//     }, {});
//   }
//   if(str[0] === '[') {
//     return str.slice(1, -1).split(',').map((value) => parse(value));
//   }
// }

function parse(str) {
  // "" > Error
  // "'" Error
  // "null" > null
  // 'true' 'false' > true false
  // "{}" "[]"  > {} [] 
  // [0] == " > trim " 
  // number convert take NaN into account
  // process if starts with [  or { 
  switch (str) {
    case "": case "'": case '"':
      throw new Error("Cant parse")
    case "null":
      return null;
    case "true": 
      return true
    case "false":
      return false
    case "{}": 
      return {};
    case "[]":
      return [];
  } 
  if(+str ===+str){
    return Number(str);
  }
  if (str[0] === "'") {
       throw new Error("Cant parse")
   }
   if (str[0] === '"') {
      return str.slice(1,-1);
   }
   if(str[0] === "{") {
      // trim { and }
      // build up a object reduce 
      // "{a: {"b"}}"
      // split on : get k and v 
      return str.slice(1,-1).split(",").reduce((obj,val)=> {
        let i = val.indexOf(":");
        let k = val.slice(0,i);
        let v = val.slice(i+1);
        obj[parse(k)] = parse(v);
        return obj
      },{});

    }
    if(str[0] === "[") {
      return str.slice(1,-1).split(",").map(a => parse(a));
    }
}
