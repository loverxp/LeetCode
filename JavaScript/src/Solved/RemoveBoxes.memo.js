// https://leetcode-cn.com/problems/remove-boxes/
var Test = require('./Common/Test');

var removeBoxes = function (boxes) {
    const map = new Map();
    return remove(boxes);
    // return boxes.length;

    function remove(boxes) {
        if (boxes.length > 0) {
            const key = boxes.join(',');
            // console.log();
            // console.log({key});
            if (!map.has(key)) {
                // console.log("no exist!");
                let max = 0;
                for (let i = 0, j = 0; i < boxes.length; i = j) {
                    const box = boxes[i];
                    while (++j < boxes.length && box == boxes[j]);
                    const k = j - i;
                    const rest = boxes.filter((_, index) => index < i || index >= j);
                    max = Math.max((k * k) + remove(rest), max);
                }
                map.set(key, max);
            }
            return map.get(key);
        }
        return 0;
    }
}

function test(boxes) {
    Test.test(removeBoxes, boxes);
}

// test([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// test([1, 3, 2, 2, 2, 3]);
// test([1, 3, 2]);
// test([1, 1, 1]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3 ]);
test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8]);
// test([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6]);
