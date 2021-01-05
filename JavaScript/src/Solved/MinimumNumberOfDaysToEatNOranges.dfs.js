// https://leetcode-cn.com/problems/minimum-number-of-days-to-eat-n-oranges/
var Test = require('./Common/Test');

var minDays = function (n) {
    const memo = new Map();
    dfs(n, 0);
    return memo.get(0);

    function dfs(n, days) {
        if (!memo.has(0) || days < memo.get(0)) {
            if (!memo.has(n) || days < memo.get(n)) {
                memo.set(n, days);
                if (n > 0) {
                    days++;
                    if (n % 3 == 0) {
                        dfs(n / 3, days);
                    }
                    if (n % 2 == 0) {
                        dfs(n / 2, days);
                    }
                    dfs(n - 1, days);
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
run(56)
// run(99999)
// run(99999999)
// run(9999999)
// run(1e8);
// run(2e9);