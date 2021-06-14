/*
 * @param { Function[] } funcs 
 * imperative style
 */

function pipe(funcs) {
  return function(arg) {
     let result = arg
     for (let func of funcs) {
       result = func.call(this, result)
     }
     return result
  }
}


/*
* functional style
*/

function pipe(funcs) {
  return function(arg) {
     return funcs.reduce((result, func) => {
       return func.call(this, result)
     }, arg)
  }
}
