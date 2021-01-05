// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    const memo = new Map();
    dfs(n, 0);
    return memo.get(1) + 1;

    function dfs(n, days) {
        if (!memo.has(1) || days < memo.get(1)) {
            if (!memo.has(n) || days < memo.get(n)) {
                memo.set(n, days);
                if (n > 1) {
                    days++;
                    dfs(Math.trunc(n / 3), days + n % 3);
                    dfs(Math.trunc(n / 2), days + n % 2);
                }
            }
        }
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