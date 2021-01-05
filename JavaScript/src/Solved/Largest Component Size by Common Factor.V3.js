// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

Test.isLogOn = false;

var largestComponentSize = function (nums) {
    // for (const num of nums) {
        // console.log({num});
    // }
    // console.log(nums.length);
    // return nums;
    // return nums.length;

    const counters = new Map();
    for (const num of nums) {
        Test.log();
        const factors = calcFactors(num);
        // const factors = [...calcFactors(num)].sort((a, b) => a - b);
        // console.log({factors});
        Test.log({ counters });
        Test.log({ num, factors });
        // continue;

// /*
        let counter;
        const used = new Set();
        for (const factor of factors) {
            if (counters.has(factor)) {
                if (counter) {
                    const counter2 = counters.get(factor);
                    // if (counter != counter2) {
                    if (!used.has(counter2)) {
                        used.add(counter2);
                        counter[0] += counter2[0];
                        // counter2[0] = 0;
                        for (const factor of counter2[1]) {
                            counter[1].add(factor);
                        }
                    }
                }
                else {
                    counter = counters.get(factor);
                    used.add(counter);
                }
            }
        }
        if (counter) {
            counter[0]++;
            for (const factor of factors) {
                // counters.set(factor, counter);
                counter[1].add(factor);
            }
        }
        else {
            counter = [1, factors];
        }

        for (const factor of counter[1]) {
            counters.set(factor, counter);
        }
        // */
    }
    Test.log(counters);
    // Test.log({ counter })
    // return Math.max(...counter);
    return Math.max(...[...counters].map(a => a[1][0]));


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

function testWithTestcase(id) {
    Test.testWithTestcase(largestComponentSize, id);
}

// run([4, 6, 15, 35])
// run([20, 50, 9, 63])
// run([2, 3, 6, 7, 4, 12, 21, 39])
// run([99, 100, 69, 39, 14, 56, 91, 60]);
// run([65, 35, 43, 76, 15, 11, 81, 22, 55, 92, 31])

// run([11, 15, 22, 31, 35, 43, 55, 65]);
// run([11, 15, 22, 31, 35, 43, 55, 65, 76]);
// run([11, 15, 22, 35, 55, 65, 76]);
// run([22, 35, 55, 76]);
// run([22, 35, 55]);
// run([2, 4, 8]);

testWithTestcase(107058094)     //1980