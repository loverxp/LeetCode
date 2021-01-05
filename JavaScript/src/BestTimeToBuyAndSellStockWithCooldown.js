// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var Test = require('./Common/Test');

var maxProfit = function (prices) {
    prices.unshift(Infinity);
    let sum = 0;
    let low = high = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        const price = prices[i];
        if (price < low) {
            low = price;
        }
        else {
            if (high > low) {
                sum += high - low;
            }
            low = high = prices[--i];
        }
    }
    return sum;
};

function test(prices) {
    Test.test(maxProfit, prices);
}

test([7, 1, 5, 3, 6, 4]);
test([7, 6, 4, 3, 1]);
test([3, 3, 5, 0, 0, 3, 1, 4]);
test([1, 2, 3, 4, 5]);
test([1, 2, 3, 0, 2]);

// [7, 1, 5, 3, 6, 4]
// [7, 6, 4, 3, 1]
// [3, 3, 5, 0, 0, 3, 1, 4]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 0, 2]