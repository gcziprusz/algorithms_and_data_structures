/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buyAt = 0,sellAt=1;
  let maxProfit =0;
  while(sellAt<prices.length){
   if(prices[buyAt] < prices[sellAt]){
      let localProfit = prices[sellAt] -prices[buyAt];
      maxProfit = Math.max(localProfit,maxProfit)
   } else {
       buyAt = sellAt;
   }
   sellAt++;
  } 
  return maxProfit;
};
