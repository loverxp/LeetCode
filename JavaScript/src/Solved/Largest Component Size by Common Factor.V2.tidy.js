// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

Test.isLogOn = false;

var largestComponentSize = function (nums) {
    const counter = [];
    const mapper = new Map();
    for (const num of nums) {
        const factors = calcFactors(num);
        let index;
        for (const factor of factors) {
            if (mapper.has(factor)) {
                const index2 = mapper.get(factor);
                if (undefined == index) {
                    index = index2;
                }
                else {
                    if (index != index2) {
                        counter[index] += counter[index2];
                        counter[index2] = 0;
                    }
                }
            }
        }
        if (undefined == index) {
            index = counter.length;
            counter.push(1);
        }
        else {
            counter[index]++;
        }
        for (const factor of factors) {
            mapper.set(factor, index);
        }
    }
    return Math.max(...counter);

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

run([4, 6, 15, 35])
run([20, 50, 9, 63])
run([2, 3, 6, 7, 4, 12, 21, 39])
run([99, 100, 69, 39, 14, 56, 91, 60]);