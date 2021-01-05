// https://leetcode-cn.com/problems/number-of-ways-to-paint-n-x-3-grid/
var Test = require('./Common/Test');

var numOfWays = function (n) {
    const mod = 1e9 + 7;
    let ways = [6, 6];
    for (let i = 1; i < n; i++) {
        const ways2 = [2 * (ways[0] + ways[1]), 2 * ways[0] + 3 * ways[1]];
        ways = ways2;
        ways[0] %= mod;
        ways[1] %= mod;
    }
    console.log({ ways });
    return (ways[0] + ways[1]) % mod;
};

function run(n) {
    Test.run(numOfWays, n);
}

// run(2);
// run(3);
// run(7);
// run(5000);
// run(1000);
run(500)