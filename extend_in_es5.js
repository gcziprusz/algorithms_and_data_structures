const myExtends = (SuperType, SubType) => {
    function ExtendedType(...args) {
      SuperType.call(this, ...args);
      SubType.call(this, ...args);
      Object.setPrototypeOf(this, SubType.prototype);
    }
  
    Object.setPrototypeOf(SubType.prototype, SuperType.prototype);
    Object.setPrototypeOf(ExtendedType.prototype, SubType.prototype);
    Object.setPrototypeOf(ExtendedType, SuperType);
  
   return ExtendedType;
}
