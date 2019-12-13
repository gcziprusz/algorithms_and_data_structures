/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minPrice = Infinity;
    var maxProfit =0;
    for(var i =0;i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit= prices[i] - minPrice;
        }
    }
    return maxProfit;
};
