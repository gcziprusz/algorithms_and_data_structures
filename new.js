// It creates a new object. The type of this object is simply object.

// It sets this new object's internal, inaccessible, [[prototype]] 
// (i.e. __proto__) property to be the constructor function's external, accessible, 
//prototype object (every function object automatically has a prototype property).

// It makes the this variable point to the newly created object.

// It executes the constructor function, using the newly created object whenever this is mentioned.

// It returns the newly created object, unless the constructor function returns a 
// non-null object reference. In this case, that object reference is returned instead.
const myNew = (constructor, ...args) => {
  const obj = Object.create(constructor.prototype);
  const ret = constructor.apply(obj, args);
  return ret !== undefined ? ret : obj;
}
