// https://leetcode-cn.com/problems/remove-boxes/
var Test = require('./Common/Test');
var { Counter } = require('./Common/Counter');

var removeBoxes = function (boxes) {

    const counter = new Counter();
    for (const box of boxes) {
        counter.inc(box);
    }
    console.log(counter);
    const next = [];
    for (const box of boxes) {
        if (counter.get(box) > 1) {
            next.push(box);
        }
    }

    return next;

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
