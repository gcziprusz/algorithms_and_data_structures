let deepCopy = function(destination, source) {
 for (var property in source) {
   if (typeof source[property] === “object” && source[property] !==   null) 
    {
      destination[property] = destination[property] || {};
      deepCopy(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
 }
 return destination;
};


/*MORE COMPLETE ALTERNATIVE*/
const deepCopy = (obj,cloned = {}) => {
  if (Array.isArray(obj)) {
    cloned = [
      ...obj
    ];
    for (let i = 0; i < obj.length; i++) {
      deepCopy(obj[i], cloned[i]);
    }
  } else if (typeof obj === 'object') {
    cloned = {
      ...obj
    };
    for (const p of Object.keys(obj)) {
      deepCopy(obj[p], cloned[p])
    }
  }
  return cloned;
}
