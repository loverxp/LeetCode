// https://leetcode-cn.com/problems/minimum-one-bit-operations-to-make-integers-zero/
var Test = require('../Common/Test');

var minimumOneBitOperations = function (n) {
    // if (n == 0) return 0;

    // const len = Math.ceil(Math.log2(n));
    const len = Math.trunc(Math.log2(n)) + 1;

    // if (1 << (len - 1) == n) {
    //     return n * 2 - 1;
    // }
    // else {
    const base = 1 << (len - 1);    //16
    const half = base >> 1;         //8
    const steps = base * 2 - 1;         //31
    // return dfs(n * 2 - 1, 1 << (len - 2), true);    //31,8,big
    // return dfs(base, steps, half, false);
    console.log({ base, half, steps });
    return dfs(base, steps, half, true);
    // }

    // function dfs(base, steps, half, big) {
    function dfs(base, steps, half, less) {
        console.log();
        console.log({ base, steps, half, less });
        if (base == n) return steps;        //16, 31
        // if (base + half == n) return steps - base + 1;      //24, return 16
        // if (base + (big ? -half : half) == n) return steps - base + 1;      //24, return 16
        // if (base + (big ? half : -half) == n) return steps - half + 1;      //24, return 16

        if (less) {
            // if (base + half == n) return steps + half + 1;      //24, return 16
            // if (base + half == n) return steps - half * 2 + 1;      //24, return 16
            if (half == 1) return steps - 1;

            if (base + half > n) {
                return dfs(base, steps, half / 2, true);
            }
            else {
                return dfs(base + half, steps - half * 2 + 1, half / 2, false);
            }
        }
        else {
            // if (base - half == n) return steps - half + 1;

            if (half == 1) return steps + 1;

            // if (base - half < n) {
            // if (base + half < n) {      //24 + 4
            if (base + half > n) {      //24 + 4 > 
                return dfs(base, steps, half / 2, false);
            }
            else {
                return dfs(base + half, steps + half * 2 + 1, half / 2, true);
                // return dfs(base - half, steps + half, half / 2, true);
            }
        }

    }
};

function run(n) {
    Test.run(minimumOneBitOperations, n);
}

// run(0)
// run(3)
// run(2)
// run(6)
// run(9)
// run(16)
// run(17)
run(24);
run(25)
// run(48);
// run(29);
// run(333)

// { base: 16, steps: 31, half: 8, big: false }
// { base: 24, steps: 23, half: 4, big: true }
// { base: 20, steps: 19, half: 2, big: true }
// { base: 18, steps: 17, half: 1, big: true }
// { base: 17, steps: 16, half: 0.5, big: true }
// { base: 16.5, steps: 15.5, half: 0.25, big: true }
// { base: 16.25, steps: 15.25, half: 0.125, big: true }

// { base: 16, steps: 31, half: 8, big: false }
// { base: 24, steps: 23, half: 4, big: true }
// { base: 20, steps: 19, half: 2, big: true }
// { base: 18, steps: 17, half: 1, big: true }
// { base: 17, steps: 16, half: 0.5, big: true }