// https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/https://leetcode-cn.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/
var Test = require('../Common/Test');

var numWays = function (steps, arrLen) {
    if (arrLen == 0) return 1;

    const mod = 1000000007;
    let counter = new Map();
    counter.set(0, 1);
    let counter2 = new Map();

    for (let i = 0; i < steps; i++) {
        for (const [pos, count] of counter) {
            for (let i = 0; i < 3; i++) {
                const nextPos = pos + i - 1;
                if (nextPos >= 0 && nextPos < Math.min(arrLen, steps / 2 + 1)) {
                    if (!counter2.has(nextPos)) {
                        counter2.set(nextPos, 0);
                    }
                    counter2.set(nextPos, (count + counter2.get(nextPos)) % mod);
                }
            }
        }
        const temp = counter;
        counter = counter2;
        counter2 = temp;
        counter2.clear();
    }

    return counter.get(0);
};

function test(steps, arrLen) {
    Test.test(numWays, steps, arrLen);
}

test(3, 2);
test(2, 4);
test(4, 2);
// test(500, 500);
// test(1, 0);
// test(10, 0);

test(500, 1000000);

// 3
// 2
// 2
// 4
// 0
// 0
// 0
// 1
// 1
// 0
// 500
// 500