// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

var largestComponentSize = function (nums) {
    const counters = new Map();
    for (const num of nums) {
        const factors = calcFactors(num);
        // const factors = [...calcFactors(num)];
        console.log({ num, factors });

        let counter;
        for (const factor of factors) {
            if (counters.has(factor)) {
                counter = counters.get(factor);
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

        // if (factors.size > 1) {
        // if (factors.size) {
        // counter.set(num, factors);
        // }
    }
    // console.log({ counter: counters });
    return counters;



    function calcFactors(num) {
        // const factors = new Set([num]);
        const factors = [];
        // const factors = new Set();
        const sqrt = Math.sqrt(num);
        // for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let i = 2; i < Math.trunc(sqrt); i++) {
            if (num % i == 0) {
                // factors.add(i);
                // factors.add(num / i);
                factors.push(i);
                factors.push(num / i);
            }
        }
        if (Number.isInteger(sqrt)) factors.push(sqrt);
        factors.push(num);
        return factors;
    }
};

function run(nums) {
    Test.run(largestComponentSize, nums);
}


// run([4, 6, 15, 35])
// run([20, 50, 9, 63])
run([2, 3, 6, 7, 4, 12, 21, 39])