// https://leetcode-cn.com/problems/jump-game-iii/
var Test = require('../Common/Test');

var canReach = function (nums, start) {
    return dfs(start, new Set());

    function dfs(index, visited) {
        if (!visited.has(index)) {
            if (index >= 0 && index < nums.length) {
                if (0 == nums[index]) {
                    return true;
                }
                else {
                    visited.add(index);
                    const result = dfs(index - nums[index], visited) || dfs(index + nums[index], visited);
                    visited.delete(index);
                    return result;
                }
            }
        }
        return false;
    }
};

function test(arr, start) {
    Test.test(canReach, arr, start);
}

test([4, 2, 3, 0, 3, 1, 2], 5);
test([4, 2, 3, 0, 3, 1, 2], 0);
test([3, 0, 2, 1, 2], 2);