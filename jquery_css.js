/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  return {
    css: function(property, value) {
      el.style[property] = value;
      return this;
    }
  }
}


/**
 * CLASS based solution
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
  // your code here
  return new Wrapper(el);
}

class Wrapper {
  constructor(el) {
    this.el = el;
  }

  css(p,v) {
    this.el.style[p] = v;

    return this;
  }
}
