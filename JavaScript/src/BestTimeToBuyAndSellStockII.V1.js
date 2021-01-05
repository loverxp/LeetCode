// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
var Test = require('./Common/Test');

var maxProfit = function (prices) {
    prices.push(0);
    let segments = [];
    let segment = [prices[0], prices[0]];
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price > segment[1]) {
            segment[1] = price;
        }
        else {
            if (segment[0] != segment[1]) {
                segments.push(segment);
            }
            segment = [price, price];
        }
    }

    return segments.map(([a, b]) => b - a).reduce((sum, val) => sum + val, 0);
};

function test(prices) {
    Test.test(maxProfit, prices);
}

test([7, 1, 5, 3, 6, 4]);
test([7, 6, 4, 3, 1]);
test([3, 3, 5, 0, 0, 3, 1, 4]);
test([1, 2, 3, 4, 5]);
// test([7, 6, 4, 3, 1]);
test([1, 2, 3, 0, 2]);

// [7, 1, 5, 3, 6, 4]
// [7, 6, 4, 3, 1]
// [3, 3, 5, 0, 0, 3, 1, 4]
// [1, 2, 3, 4, 5]
// [7, 6, 4, 3, 1]
// [1, 2, 3, 0, 2]