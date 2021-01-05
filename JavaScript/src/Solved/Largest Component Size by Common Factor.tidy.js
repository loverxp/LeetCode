// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

// Test.isLogOn = false;

var largestComponentSize = function (nums) {
    const counters = new Map();
    for (const num of nums) {
        const factors = calcFactors(num);
        let counter;
        for (const factor of factors) {
            if (counters.has(factor)) {
                const counter2 = counters.get(factor);
                if (!counter) {
                    counter = counter2;
                }
                else {
                    if (counter != counter2) {
                        counter[0] += counter2[0];
                        counter2[0] = 0;
                    }
                }
            }
        }
        if (!counter) {
            counter = [1];
        }
        else {
            counter[0]++;
        }
        for (const factor of factors) {
            counters.set(factor, counter);
        }
    }
    return Math.max(...[...counters].map(a => a[1][0]));

    function calcFactors(num) {
        const factors = new Set();
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                factors.add(i);
                factors.add(num / i);
            }
        }
        if (factors.size == 0) factors.add(num);
        return factors;
    }
};

function run(nums) {
    Test.run(largestComponentSize, nums);
}

// run([4, 6, 15, 35])
// run([20, 50, 9, 63])
// run([2, 3, 6, 7, 4, 12, 21, 39])
run([99, 100, 69, 39, 14, 56, 91, 60]);
// run([99, 39, 69, 63, 777]);