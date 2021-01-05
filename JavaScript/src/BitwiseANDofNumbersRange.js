// https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/
var Test = require('./Common/Test');

var rangeBitwiseAnd = function(m, n) {
    let result = m;
    for (let i = m + 1; i <= n; i++) {
        result &= i;
    }
    return result;
};

function test(m,n) {
    Test.test(rangeBitwiseAnd, m,n);
}

test(0,2147483647);