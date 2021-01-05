// https://leetcode-cn.com/problems/largest-component-size-by-common-factor/
var Test = require('./Common/Test');

Test.isLogOn = false;

var largestComponentSize = function (nums) {
    const n = nums.length;
    const max = Math.max(...nums);
    // console.log({ max });
    // const numSet = new Set(nums);
    // const n = nums.size;
    // const primes = new Set();
    const primes = new Map();
    const numFactors = new Map();
    for (const num of nums) {
        // numFactors.set(num, []);
        numFactors.set(num, new Set());
    }
    const isPrimes = Array(max).fill(true);
    // console.log({ isPrimes });
    isPrimes[0] = false;
    isPrimes[1] = false;
    // for (let i = 2; i <= n; i++) {
    for (let i = 2; i <= max; i++) {
        // console.log();
        // console.log({ i });
        // console.log(isPrimes[i]);
        if (isPrimes[i]) {
            const multiples = [];
            if (numFactors.has(i)) {
                multiples.push(i);
            }
            for (let j = i + i; j <= max; j += i) {
                // console.log({ j });
                // for (let j = i; j <= max; j += i) {
                isPrimes[j] = false;
                // if (numSet.has(j)) multiples.push(j);
                if (numFactors.has(j)) {
                    multiples.push(j);
                    // numFactors.get(j).push(i);
                    numFactors.get(j).add(i);
                }
            }
            // if (numFactors.has(i) && numFactors.get(i).length == 0) numFactors.get(i).push(i);
            if (numFactors.has(i) && numFactors.get(i).size == 0) numFactors.get(i).add(i);
            if (multiples.length) {
                primes.set(i, multiples);
            }
        }
    }
    // console.log({ primes });
    // console.log({ factors: numFactors });

    const counters = new Map();
    for (const [_, factors] of numFactors) {
        const used = new Set();
        let counter;
        for (const factor of factors) {
            if (counters.has(factor)) {
                if (counter) {
                    const counter2 = counters.get(factor);
                    if (!used.has(counter2)) {
                        used.add(counter2);
                        counter[0] += counter2[0];
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
                counter[1].add(factor);
            }
        }
        else {
            counter = [1, factors];
        }

        for (const factor of counter[1]) {
            counters.set(factor, counter);
        }
    }
    // console.log(counters);
    return Math.max(...[...counters].map(a => a[1][0]));
    // const unioned = new Set();
    // const counter = [];
    // const counter = 
    // for (const [prime, multiples] of primes) {
    // if (!unioned.get(prime)) {

    // }
    // }


    // return primes;
    return;
}

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