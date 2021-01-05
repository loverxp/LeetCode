// https://leetcode-cn.com/problems/pile-box-lcci/
var Test = require('../Common/Test');

var pileBox = function (box) {
    const length = box.length;
    if (length == 0) return 0;
    box = box.sort(([x1, y1, z1], [x2, y2, z2]) => x2 - x1 != 0 ? x2 - x1 : y2 - y1 != 0 ? y2 - y1 : z2 - z1);
    
    const maxHeights = box.map(([, , h]) => h);
    for (let i = 0; i < length - 1; i++) {
        const start = box[i];
        const prevHeight = maxHeights[i];
        for (let j = i + 1; j < length; j++) {
            const current = box[j];
            if (start[0] > current[0] && start[1] > current[1] && start[2] > current[2]) {
                if (prevHeight + current[2] > maxHeights[j]) {
                    maxHeights[j] = prevHeight + current[2];
                }
            }
        }
    }
    return Math.max(...maxHeights);
};

function test(envelopes) {
    Test.test(pileBox, envelopes);
}

test([]);
test([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
test([[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]);