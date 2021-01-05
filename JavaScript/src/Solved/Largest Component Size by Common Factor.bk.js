// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

var largestComponentSize = function (nums) {
    const counter = new Map();
    for (const num of nums) {
        for (const factor of calcFactors(num)) {
            if (!counter.has(factor)) {
                counter.set(factor, [num]);
            }
            else {
                counter.get(factor).push(num);
            }
        }
    }
    return counter;

    function calcFactors(num) {
        const factors = new Set();
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                factors.add(i);
                factors.add(num / i);
            }
        }
        return factors;
    }
};

function run(nums) {
    Test.run(largestComponentSize, nums);
}


run([4, 6, 15, 35])
// run([20, 50, 9, 63])
// run([2, 3, 6, 7, 4, 12, 21, 39])