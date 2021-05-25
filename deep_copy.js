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
