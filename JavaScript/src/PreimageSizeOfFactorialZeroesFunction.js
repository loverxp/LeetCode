// https://leetcode-cn.com/problems/preimage-size-of-factorial-zeroes-function/
var Test = require('./Common/Test');

var preimageSizeFZF = function (k) {

    // return trailingZeroes(k);

    let count = 0;
    let i = 5;
    while (count < k) {
        count = 0;
        for (let j = 5; j <= i; j *= 5) {
            count += Math.trunc(i / j);
        }
        i *= 5;
    }

    return count;
    // for (let i = 5; i <= n; i *= 5) {
    for (let i = 5; count <= k; i *= 5) {
        count += Math.trunc(n / i);
    }



    function binarySearch(low, high) {

    }

    function trailingZeroes(n) {
        let count = 0;
        for (let i = 5; i <= n; i *= 5) {
            count += Math.trunc(n / i);
        }
        return count;
    };
};

function run(k) {
    Test.run(preimageSizeFZF, k);
}

run(10000);
run(999999999);
run(9999999999);
run(1e9)
run(4e9)
run(5e9)
run(1e10)