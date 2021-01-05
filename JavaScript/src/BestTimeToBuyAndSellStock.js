// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var Test = require('./Common/Test');

var maxProfit = function (prices) {
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        const low = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const high = prices[j];
            if (high > low) {
                max = Math.max(max, high - low);
            }

        }
    }
    return max;
};

function test(prices) {
    Test.test(maxProfit, prices);
}

test([7, 1, 5, 3, 6, 4]);
test([7, 6, 4, 3, 1]);
test([3, 3, 5, 0, 0, 3, 1, 4]);
test([1, 2, 3, 4, 5]);
test([7, 6, 4, 3, 1]);