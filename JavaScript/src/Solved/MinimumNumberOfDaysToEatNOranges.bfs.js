// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('../Common/Test');

var minDays = function (n) {
    let eatens = new Set([0]);
    let days = 0;
    while (eatens.size) {
        days++;
        const eatens2 = new Set();
        for (const eaten of eatens) {
            if (eaten + 1 == n) {
                return days;
            }
            else {
                const remains = n - eaten;
                if (remains % 3 == 0) {
                    eatens2.add(eaten + 2 * remains / 3);
                }
                if (remains % 2 == 0) {
                    eatens2.add(eaten + remains / 2);
                }
                eatens2.add(eaten + 1);
            }
        }
        eatens = eatens2;
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