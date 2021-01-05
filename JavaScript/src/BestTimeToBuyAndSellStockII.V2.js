// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var Test = require('./Common/Test');

var maxProfit = function (prices) {
    let sum = 0;
    prices.push(0);
    let low = high = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price > high) {
            high = price;
        }
        else {
            if (high > low) {
                sum += high - low;
            }
            low = high = price;
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
test([7, 6, 4, 3, 1]);

// [7, 1, 5, 3, 6, 4]
// [7, 6, 4, 3, 1]
// [3, 3, 5, 0, 0, 3, 1, 4]
// [1, 2, 3, 4, 5]
// [7, 6, 4, 3, 1]
