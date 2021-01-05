// https://leetcode-cn.com/problems/intersection-lcci/
var Test = require('./Common/Test');

// var intersection = function(start1, end1, start2, end2) {
var intersection = function ([startX1, startY1], [endX1, endY1], [startX2, startY2], [endX2, endY2]) {

    // if(startX1 < )
    // const tan1 = (endY1 - startY1) / (endX1 - startX1);
    // const tan2 = (endY2 - startY2) / (endX2 - startX2);

    const atan1 = (endX1 - startX1) / (endY1 - startY1);
    const atan2 = (endX2 - startX2) / (endY2 - startY2);

    const x1 = startX1 - startY1 * atan1;
    const x2 = startX2 - startY2 * atan2;

    const d = x2 - x1;
    const y = d / (atan1 - atan2);
    const x = startX1 + (y - startY1) * atan1;
    return [x, y];
};

function test(...args) {
    // console.log(intersection(...args));
    Test.test(intersection, ...args);
}

// test([0, 0], [1, 1], [1, 0], [0, 1]);
// test([0, 0], [1, 1], [0, 1], [1, 0]);
// test([0, 0], [1, 1], [0, 1], [1, 0]);

test([0, 0], [1, 0], [1, 1], [0, -1]);
// test([0, 0], [1, 1], [1, 0], [2, 1]);
// test([0, 0], [3, 3], [1, 1], [2, 2]);