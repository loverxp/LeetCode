// https://leetcode-cn.com/problems/form-largest-integer-with-digits-that-add-up-to-target/
var Test = require('./Common/Test');
// var { Trie } = require('./Common/Trie');

var largestNumber = function (costs, target) {
    const greater = (str1, str2) => str1.length > str2.length || (str1.length == str2.length && str1 > str2);
    const memo = new Map();
    const succeed = new Map();
    let result = "0";
    dfs(9, "", 0);
    console.log({ memo });
    return result;

    function dfs(start, str, cost) {
        if (cost > target) return false;
        if (cost == target) {
            result = greater(str, result) ? str : result;
            return true;
        }
        else {
            if (!succeed.has(cost) || succeed.get(cost)) {
                let success = succeed.has(cost) ? succeed.get(cost) : false;
                if (!memo.has(cost) || greater(str, memo.get(cost))) {
                    memo.set(cost, str);
                    // let success= false;
                    for (let i = start; i > 0; i--) {
                        success |= dfs(i, str + i, cost + costs[i - 1]);
                    }
                    succeed.set(cost, success);
                    return success;
                }
                return true;
            }
            return false;
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
// run([6, 10, 15, 40, 40, 40, 40, 40, 40], 4700)