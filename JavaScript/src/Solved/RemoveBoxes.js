// https://leetcode-cn.com/problems/remove-boxes/
var Test = require('../Common/Test');

// Test.isLogOn = false;

var removeBoxes = function (boxes) {
    Test.log();
    Test.log(boxes);
    if (boxes.length > 0) {
        let max = 0;
        for (let i = 0, j = 0; i < boxes.length; i = j) {
            const box = boxes[i];
            while (++j < boxes.length && box == boxes[j]);
            const k = j - i;
            const rest = boxes.filter((_, index) => index < i || index >= j);
            Test.log({ i, j, k, box, max });
            max = Math.max((k * k) + removeBoxes(rest), max);
        }
        return max;
    }
    return 0;
};

function test(boxes) {
    Test.test(removeBoxes, boxes);
}

test([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// test([1, 3, 2, 2, 2, 3]);
// test([1, 3, 2]);
// test([1, 1, 1]);

// function testArray(arr,i,j) {
    // return arr.filter((_,index) => index< i && index)

// }