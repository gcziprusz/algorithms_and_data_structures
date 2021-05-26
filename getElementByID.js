function getById(id, parent, list){
  parent = parent || document.body;
  list   = list   || [];

  var l, child, children = parent.children;

  if(children){
    l = children.length;
    while(l--){
      child = children[l];
      if(child.id == id) list.push(child);
      getById(id, child, list);
    }
  }

  return list;
}
