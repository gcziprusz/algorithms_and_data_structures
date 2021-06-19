// Implement Observable interval()

/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  return new Observable(function(){
    let counter=0;
    window.setInterval(function(){
      return counter++;
    },1000);
  })
}
