// https://leetcode-cn.com/problems/restore-the-array/
var Test = require('../Common/Test');

var numberOfArrays = function (s, k) {
    const mod = 1e9 + 7;
    const n = s.length;
    const dp = Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        if (parseInt(s[i]) > k) return 0;

        if (s[i] == '0') {
            dp[i] = 0;
        }
        else {
            let str = s[i];
            if (parseInt(s.slice(i)) <= k) dp[i]++;
            for (let j = i + 1; j < n && parseInt(str) <= k; j++) {
                dp[i] += dp[j];
                dp[i] %= mod;
                str += s[j];
            }
        }
    }
    return dp[0];
};

function run(s, k) {
    Test.run(numberOfArrays, s, k);
}

// run("1000", 10000)
// run("1000", 10)
// run("1317", 2000)
// run("2020", 30)
// run("1234567890", 90)

run("123456789", 90)


// run("90", 90)
// run("190", 90)
// run("345", 2)
// run("500200", 100)
// run("500200", 700)