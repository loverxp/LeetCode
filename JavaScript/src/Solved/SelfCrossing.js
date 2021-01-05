// https://leetcode-cn.com/problems/self-crossing/

var Test = require('../Common/Test');

var isSelfCrossing = function (x) {
    for (let i = 3; i < x.length; i++) {
        if (x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]) return true;
        if (i > 3 && x[i - 1] == x[i - 3] && x[i] + x[i - 4] >= x[i - 2]) return true;
        if (i > 4 && x[i - 1] <= x[i - 3] && x[i - 1] + x[i - 5] >= x[i - 3] && x[i] + x[i - 4] >= x[i - 2] && x[i - 4] <= x[i - 2]) return true;
    }
    return false;
};

function test(x) {
    Test.test(isSelfCrossing, x);
}


test([2, 1, 1, 2]);
test([1, 2, 3, 4]);
test([1, 1, 1, 1]);
test([1, 1, 2, 1, 1])
test([3, 3, 3, 2, 1, 1]);

// [2, 1, 1, 2]
// [1, 2, 3, 4]
// [1, 1, 1, 1]
// [1, 1, 2, 1, 1]
// [3, 3, 3, 2, 1, 1]