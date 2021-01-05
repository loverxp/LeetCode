// https://leetcode-cn.com/problems/count-all-valid-pickup-and-delivery-options/
var Test = require('../Common/Test');

var countOrders = function (n) {
    const mod = 1e9 + 7;
    let count = 1;
    for (let i = 1; i < n; i++) {
        let x = i * 2 + 1;
        count *= (1 + x) * x / 2;
        count %= mod;
    }
    return count;
};

function run(n) {
    Test.run(countOrders, n);
}

run(1);
run(2);
run(3);
run(500);