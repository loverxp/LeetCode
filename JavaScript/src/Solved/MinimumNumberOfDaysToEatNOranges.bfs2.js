// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    let remains = new Set([n]);
    let days = 0;
    while (remains.size) {
        days++;
        const remains2 = new Set();
        for (const remain of remains) {
            // remains2.add(Math.trunc(n / 3), days + n % 3);
            // remains2.add(Math.trunc(n / 2), days + n % 2);
        }
        remains = eatens2;
    }
};

function run(n) {
    Test.run(minDays, n);
}

// run(1)
// run(10)
// run(6)
// run(56)
// run(99999)
// run(99999999)
// run(9999999)
// run(1e8);
run(2e9);