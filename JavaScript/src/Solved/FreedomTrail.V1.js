// https://leetcode-cn.com/problems/freedom-trail/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var findRotateSteps = function (ring, key) {
    const charIndexes = new Map();
    for (let i = 0; i < ring.length; i++) {
        const char = ring[i];
        if (!charIndexes.has(char)) {
            charIndexes.set(char, []);
        }
        charIndexes.get(char).push(i);
    }
    const ringLength = ring.length;
    const memo = Array.from({ length: key.length + 1 }, _ => Array.from({ length: ring.length + 1 }, _ => Infinity));

    let minSteps = Infinity;
    dfs(0, 0, 0);
    return minSteps;

    function dfs(keyIndex, ringIndex, steps) {
        if (steps < minSteps && steps < memo[keyIndex][ringIndex]) {
            memo[keyIndex][ringIndex] = steps;
            if (keyIndex == key.length) {
                minSteps = steps;
            }
            else {
                const char = key[keyIndex];
                for (const index of charIndexes.get(char)) {
                    const l = (ringIndex + ringLength - index) % ringLength;
                    const r = (index + ringLength - ringIndex) % ringLength;
                    dfs(keyIndex + 1, index, steps + 1 + Math.min(l, r));
                }
            }
        }
    }
};

function test(ring, key) {
    Test.test(findRotateSteps, ring, key);
    // Test.repeatTest(10000, findRotateSteps, ring, key);
}

test("godding", "gd");
