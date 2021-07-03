function createElement(type, props, ...children) {
  return {
    type,
    props:{
      ...props,
      children
    }
  }
}
function render(json){
  if(typeof json === 'string') return document.createTextNode(json);

  let {type, props} = json;
  if(typeof type === 'function'){
    return render(type(props));
  }
  let {children,...attrs} = props;

  let el = document.createElement(type);
  for(let [name,val] of Object.entries(attrs)){
    el[name] =val;
  }
  let childArr = Array.isArray(children)?children:[children];
  for(let child of childArr){
    el.append(render(child));
  }
  return el;
}
  
