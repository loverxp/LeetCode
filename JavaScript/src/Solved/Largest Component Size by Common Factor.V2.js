// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

// Test.isLogOn = false;

var largestComponentSize = function (nums) {
    // nums.sort((a, b) => a - b);
    // console.log(nums);
    const counter = [];
    const mapper = new Map();
    for (const num of nums) {
        Test.log();
        const factors = calcFactors(num);
        // const factors = [...calcFactors(num)].sort((a, b) => a - b);
        // console.log({factors});
        Test.log({ mapper })
        Test.log({ counter });
        Test.log({ num, factors });
        // continue;

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
    Test.log(mapper);
    Test.log({ counter })
    return Math.max(...counter);


    function calcFactors(n) {
        const factors = new Set();
        for (let i = 2; i <= n; i++) {
            if (n % i == 0) {
                n /= i;
                factors.add(i);
                i--;
            }
        }
        return factors;
    }
};

function run(nums) {
    Test.run(largestComponentSize, nums);
}

// run([4, 6, 15, 35])
// run([20, 50, 9, 63])
// run([2, 3, 6, 7, 4, 12, 21, 39])
// run([99, 100, 69, 39, 14, 56, 91, 60]);
// run([65, 35, 43, 76, 15, 11, 81, 22, 55, 92, 31])


// run([11, 15, 22, 31, 35, 43, 55, 65]);
// run([11, 15, 22, 31, 35, 43, 55, 65, 76]);
// run([11, 15, 22, 35, 55, 65, 76]);
run([22, 35, 55, 76]);
// run([22, 35, 55]);
// run([2, 4, 8]);