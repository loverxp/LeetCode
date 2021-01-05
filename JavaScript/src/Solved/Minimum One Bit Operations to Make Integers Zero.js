// https://leetcode-cn.com/problems/minimum-one-bit-operations-to-make-integers-zero/
var Test = require('./Common/Test');

var minimumOneBitOperations = function (n) {
    if (n == 0) return 0;
    const len = Math.trunc(Math.log2(n)) + 1;

    const base = 1 << (len - 1);
    const half = base >> 1;
    const steps = base * 2 - 1;
    return dfs(base, steps, half, true);

    function dfs(base, steps, half, less) {
        // return { base, steps, half, less };
        if (base == n) return steps;
        if (less) {
            // if (half == 1) return steps - 1;
            if (base + half > n) {
                return dfs(base, steps, half / 2, true);
            }
            else {
                return dfs(base + half, steps - half * 2 + 1, half / 2, false);
            }
        }
        else {
            // if (half == 1) return steps + 1;
            if (base + half > n) {
                return dfs(base, steps, half / 2, false);
            }
            else {
                return dfs(base + half, steps + half * 2 - 1, half / 2, true);
            }
        }

    }
};

function run(n) {
    Test.run(minimumOneBitOperations, n);
}

// run(0)
// run(1)
// run(3)
// run(2)
// run(6)
// run(9)
// run(16)
// run(17)
// run(24);
// run(25)
// run(26)
// run(27)
// run(28)
// run(29)
// run(31)
// run(48);
// run(29);
// run(333)

run(81723)          //120274
run(153357)         //236041
run(981723478)      //754798180
run(1000000000)     //756249599

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