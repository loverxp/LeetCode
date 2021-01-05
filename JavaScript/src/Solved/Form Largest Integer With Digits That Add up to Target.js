// https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
var Test = require('../Common/Test');
// var { Trie } = require('./Common/Trie');

var largestNumber = function (costs, target) {
    // const greater = (str1, str2) => str1.length > str2.length || (str1.length == str2.length && str1 > str2);
    const greater = (str1, str2) => str1.length > str2.length || (str1.length == str2.length && str1 >= str2);
    const dp = Array(target + 1).fill("");
    dfs(9, "", 0);
    return dp[target];

    function dfs(start, str, cost) {
        if (cost > target) return;
        if (cost == target) {
            if (greater(str, dp[target])) dp[target] = str;
        }
        else {
            if (greater(str, dp[cost])) {
                dp[cost] = str;
                for (let i = start; i > 0; i--) {
                    dfs(i, str + i, cost + costs[i - 1]);
                }
            }
        }
    }
};

function run(costs, target) {
    Test.run(largestNumber, costs, target);
}

// run([4, 7, 3, 3, 8, 7, 3, 6, 5], 28)
// run([4, 3, 2, 5, 6, 7, 2, 5, 5], 9)
// run([7, 6, 5, 5, 5, 6, 8, 7, 8], 12)
// run([2, 4, 6, 2, 4, 6, 4, 4, 4], 5)
// run([6, 10, 15, 40, 40, 40, 40, 40, 40], 47)
run([6, 10, 15, 40, 40, 40, 40, 40, 40], 470)
run([6, 10, 15, 40, 40, 40, 40, 40, 40], 4700)