// https://leetcode-cn.com/problems/student-attendance-record-i/
var Test = require('./Common/Test');

var checkRecord = function (n) {
    const mod = 1e9 + 7;
    const transitions = [[0, 1, 3], [0, 2, 3], [0, 3], [3, 4], [3, 5], [3]];
    let counts = [1, 0, 0, 0, 0, 0];
    for (let i = 0; i < n; i++) {
        const counts2 = Array(6).fill(0);
        for (let i = 0; i < counts.length; i++) {
            const count = counts[i];
            for (const state of transitions[i]) {
                counts2[state] += count;
                counts2[state] %= mod;
            }
        }
        // for (let i = 0; i < counts2.length; i++) {
        //     // const element = counts2[i];
        //     counts2[i] %= mod;

        // }

        counts = counts2;
        // counts = counts2.map(val => val % mod);
    }
    return counts.reduce((a, b) => a + b) % mod;
};

function test(n) {
    Test.test(checkRecord, n);
}

// test(1);
// test(2);        // 8
// test(3);        // 19
// test(4);        // 43
test(5);        // 94
test(200);      // 110821862
test(20000);    // 369366140
test(100000);    