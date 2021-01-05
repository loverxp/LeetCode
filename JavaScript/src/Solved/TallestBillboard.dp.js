// https://leetcode-cn.com/problems/tallest-billboard/
var Test = require('./Common/Test');

var tallestBillboard = function (rods) {
    const n = rods.length;
    const masks = rods.map((_, i) => 1 << i);
    const min = Infinity;
    const usedMask = 0;
    if (dfs(usedMask, 0, 0)) {
        return min;
    }
    else {
        return false;
    }

    function dfs(usedMask, lh, rh) {
        let result = lh == rh;
        // result |= 
        return result;
    }

};

function test(rods) {
    Test.test(tallestBillboard, rods);
}

test([1, 2, 3, 6]);
test([1, 2, 3, 4, 5, 6]);
test([1, 2]);