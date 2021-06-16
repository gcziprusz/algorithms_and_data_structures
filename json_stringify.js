/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
  if(typeof data === 'bigint') {
    throw new Error('Do not know how to serialize a BigInt at JSON.stringify');
  } 
  if(typeof data === 'string') {
    return `"${data}"`;
  } 
  if(typeof data === 'function') {
    return undefined;
  }
  if(data !== data) {
    return 'null';
  }
  if(data === Infinity) {
    return 'null';
  }
  if(data === -Infinity) {
    return 'null';
  }
  if(typeof data === 'number') {
   return `${data}`;
  }
  if(typeof data === 'boolean') {
    return `${data}`;
  }
  if(data === null) {
    return 'null';
  }
  if(data === undefined) {
    return 'null';
  }
  if(typeof data === 'symbol') {
    return 'null';
  }
  if(data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if(Array.isArray(data)) {
    const arr = data.map((el) => stringify(el));
    return `[${arr.join(',')}]`;
  }
  if(typeof data === 'object') {
    const arr = Object.entries(data).reduce((acc, [key, value]) => {
      if(value === undefined) {
        return acc;
      }
      acc.push(`"${key}":${stringify(value)}`);
      return acc;
    }, [])
    return `{${arr.join(',')}}`;
  }
}


// Cleaner but WIP 10001 edge cases are frustrating
function stringify(data) {
  switch (getType(data)) {
    case "boolean":
    case "number":
      return `${data}`
    case "date":
      return `"${data.toISOString()}"`
    case "string":
      return `"${data}"`
    case "undefined":
      return;
    case "symbol":
    case "null":
    case "nan":
    case "infinity":
      return 'null';
    case "function":
      return undefined;
    case "bigint":
     throw new Error("can't serialize bigint");
    case "array":
      const array = data.map(d=> getType(d) === 'symbol'? 'null':d).map((el) => el !== el ? 'null' : stringify(el));
      return `[${array.join(',')}]`;
      // let array = data.filter(d=> d === undefined).map(d=> ['symbol'].includes(getType(d) ? 'null':stringify(d)))
      // return `[${ array.join(',')}]`;
    case "object":
    case "map":
      let arr = Object.entries(data).reduce((acc,[k,v]) => {
          return acc.concat(`"${k}":${stringify(v)}`);
      },[]);
      return `{${arr.join(',')}}`;
  }

  // boolean  ok 
  // date     ok iso string 
  // number   ok 
  // string   ok  

  // symbol      null
  // undefined   null
  // null       null 
  
  // +-Infinity. null
  // function    null
  // bigint      throws 
  // circular structure to throws 

  // object -> composite of other types ...break down 
  // Array -> composite of other types ...break down 
  // Map, Set, WeakMap, and WeakSet ...break down
}
function getType(data){
  if(typeof data === Symbol) return 'symbol'
  if(Math.abs(data) === Infinity) return 'infinity' 
  if(data !== data) return 'nan'
  if(data instanceof Map) return 'map'
  // [object Number] > number 
  
  return Object.prototype.toString.call(data).slice(1,-1).split(" ")[1].toLowerCase();
}
