// https://leetcode-cn.com/problems/freedom-trail/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var findRotateSteps = function (ring, key) {
    const m = key.length;
    const n = ring.length;
    const charIndexes = new Map();
    for (let i = 0; i < ring.length; i++) {
        const char = ring[i];
        if (!charIndexes.has(char)) {
            charIndexes.set(char, []);
        }
        charIndexes.get(char).push(i);
    }
    charIndexes.set(undefined, [0]);
    const ringLength = ring.length;
    let dp = Array(n).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < m; i++) {
        const char = key[i];
        const prev = charIndexes.get(key[i - 1]);
        const dp2 = Array(n).fill(Infinity);
        for (const index of charIndexes.get(char)) {
            for (const prevIndex of prev) {
                const distance = Math.abs(index - prevIndex);
                dp2[index] = Math.min(dp2[index], dp[prevIndex] + 1 + Math.min(distance, n - distance));
            }
        }
        dp = dp2;
    }
    return Math.min(...dp);
};

function test(ring, key) {
    // Test.test(findRotateSteps, ring, key);
    Test.repeatTest(10000, findRotateSteps, ring, key);
}

test("godding", "gd");
