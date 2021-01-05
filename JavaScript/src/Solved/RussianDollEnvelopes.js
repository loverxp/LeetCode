// https://leetcode-cn.com/problems/russian-doll-envelopes/
var Test = require('../Common/Test');

var maxEnvelopes = function (envelopes) {
    const length = envelopes.length;
    if (length == 0) return 0;
    envelopes = envelopes.sort(([x1, y1], [x2, y2]) => x2 - x1 != 0 ? x2 - x1 : y2 - y1);
    const maxes = Array(length).fill(1);
    for (let i = 0; i < length - 1; i++) {
        const start = envelopes[i];
        const max = maxes[i] + 1;
        for (let j = i + 1; j < length; j++) {
            const current = envelopes[j];
            if (start[0] > current[0] && start[1] > current[1]) {
                if (max > maxes[j]) {
                    maxes[j] = max;
                }
            }
        }
    }
    return Math.max(...maxes);
};

function test(envelopes) {
    Test.test(maxEnvelopes, envelopes);
}

// input = [[5, 4], [6, 4], [6, 7], [2, 3]];
// input = [[5, 4], [6, 7], [6, 4], [2, 3]];


test([]);
test([[5, 4], [6, 7], [6, 4], [2, 3]]);
test([[5, 2], [6, 7], [6, 4], [2, 3]]);
test([[6, 4], [5, 7], [4, 6], [4, 3], [3, 5], [3, 2], [2, 4], [1, 2]]);