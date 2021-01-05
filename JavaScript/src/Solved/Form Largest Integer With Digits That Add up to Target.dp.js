// https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
var Test = require('./Common/Test');

var largestNumber = function (costs, target) {
    const greater = (str1, str2) => str1.length > str2.length || (str1.length == str2.length && str1 > str2);
    const dp = Array(target + 1).fill("0");
    for (let i = 0; i < 9; i++) {
        const cost = costs[i];
        if (cost <= target) {
            const str = String(i + 1);
            if (greater(str, dp[cost])) dp[cost] = str;
        }
    }
    for (let i = 1; i <= target; i++) {
        const str = dp[i];
        if (str != "0") {
            for (let j = 0; j < parseInt(str[str.length - 1]); j++) {
                const cost = costs[j] + i;
                if (cost <= target) {
                    const str = dp[i] + String(j + 1);
                    if (greater(str, dp[cost])) dp[cost] = str;
                }
            }
        }
    }
    return dp[target];
};

function run(costs, target) {
    Test.run(largestNumber, costs, target);
}

run([4, 3, 2, 5, 6, 7, 2, 5, 5], 9)
run([7, 6, 5, 5, 5, 6, 8, 7, 8], 12)
run([2, 4, 6, 2, 4, 6, 4, 4, 4], 5)
run([6, 10, 15, 40, 40, 40, 40, 40, 40], 47)
run([6, 10, 15, 40, 40, 40, 40, 40, 40], 470)
run([6, 10, 15, 40, 40, 40, 40, 40, 40], 4700)