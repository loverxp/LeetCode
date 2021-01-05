// https://leetcode-cn.com/problems/ones-and-zeroes/
var Test = require('./Common/Test');

var findMaxForm = function (strs, m, n) {
    strs = strs.map(str => {
        const array = [0, 0];
        for (const i of str) {
            array[i]++;
        }
        return array;
    });

    let steps = 0;
    let states = new Map();
    states.set(0n, [m, n]);
    while (states.size) {
        const states2 = new Map();
        for (const [strsMask, [m, n]] of states) {
            for (let i = 0n; i < strs.length; i++) {
                const [zeros, ones] = strs[i];
                const mask = 1n << i;
                if (!(strsMask & mask)) {
                    const newMask = strsMask | mask;
                    if (!states2.has(newMask) && m >= zeros && n >= ones) {
                        states2.set(newMask, [m - zeros, n - ones]);
                    }
                }
            }
        }
        states = states2;
        steps++;
    }
    return --steps;
};

function test(strs, m, n) {
    Test.test(findMaxForm, strs, m, n);
}

// test(["10", "0001", "111001", "1", "0"], 5, 3);
// test(["10", "0", "1"], 1, 1);
test(["0", "11", "1000", "01", "0", "101", "1", "1", "1", "0", "0", "0", "0", "1", "0", "0110101", "0", "11", "01", "00", "01111", "0011", "1", "1000", "0", "11101", "1", "0", "10", "0111"], 9, 80);