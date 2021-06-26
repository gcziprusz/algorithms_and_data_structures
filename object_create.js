function myObjectCreate(proto) {
  function Constructor() {}
  Constructor.prototype = proto.prototype || proto

  return new Constructor();
}
