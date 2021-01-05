// https://leetcode-cn.com/problems/perfect-rectangle/
var Test = require('../../Common/Test');

var isRectangleCover = function (rectangles) {
    const sides = [];
    for (const [x1, y1, x2, y2] of rectangles) {
        const segment = [y1, y2];
        sides.push({ isLeft: true, x: x1, segment });
        sides.push({ isLeft: false, x: x2, segment });
    }
    sides.push({ x: Infinity });
    // const compareRectangle = (s1, s2) => s1.x - s2.x || s1.y1 - s2.y1 || s1.y2 - s2.y2;
    const compareRectangle = (s1, s2) => s1.x - s2.x || s1.y1 - s2.y1;
    sides.sort(compareRectangle);
    const segments = [];
    let prevX = -Infinity;
    let prevHeight = 0;
    for (const { isLeft, x, segment } of sides) {
        if (x != prevX) {
            prevX = x;
            let height = 0;
            let prevSegment;
            for (const segment of segments) {
                if (!prevSegment || prevSegment[1] == segment[0]) {
                    prevSegment = segment;
                    height += segment[1] - segment[0];
                }
                else {
                    return false;
                }
            }
            if (prevHeight == 0) {
                prevHeight = height;
            }
            else if (x != Infinity && prevHeight != height) {
                return false;
            }
        }
        if (isLeft) {
            const i = segments.findIndex(s => segment[0] < s[0]);
            if (i == -1) {
                segments.push(segment);
            }
            else {
                segments.splice(i, 0, segment);
            }
        }
        else {
            const i = segments.findIndex(s => segment == s);
            if (i != -1) {
                segments.splice(i, 1);
            }
        }
    }
    return true;
};

function test(rectangles) {
    Test.test(isRectangleCover, rectangles);
}

rectangles1 = [
    [1, 1, 3, 3],
    [3, 1, 4, 2],
    [3, 2, 4, 4],
    [1, 3, 2, 4],
    [2, 3, 3, 4]]

rectangles2 = [
    [1, 1, 2, 3],
    [1, 3, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 4, 4]]

rectangles3 = [
    [1, 1, 3, 3],
    [3, 1, 4, 2],
    [1, 3, 2, 4],
    [3, 2, 4, 4]]

rectangles4 = [
    [1, 1, 3, 3],
    [3, 1, 4, 2],
    [1, 3, 2, 4],
    [2, 2, 4, 4]]

rectangles5 = [
    [1, 1, 3, 3],
    [2, 3, 2, 4],
    [3, 1, 4, 2],
    [2, 2, 4, 4]]

// test(rectangles1);
// test(rectangles2);
// test(rectangles3);
// test(rectangles4);
// test(rectangles5);
test([[0, 0, 4, 1], [7, 0, 8, 2], [6, 2, 8, 3], [5, 1, 6, 3], [4, 0, 5, 1], [6, 0, 7, 2], [4, 2, 5, 3], [2, 1, 4, 3], [0, 1, 2, 2], [0, 2, 2, 3], [4, 1, 5, 2], [5, 0, 6, 1]]);

// [[1, 1, 3, 3], [3, 1, 4, 2], [3, 2, 4, 4], [1, 3, 2, 4], [2, 3, 3, 4]]
// [[1, 1, 2, 3], [1, 3, 2, 4], [3, 1, 4, 2], [3, 2, 4, 4]]
// [[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [3, 2, 4, 4]]
// [[1, 1, 3, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 2, 4, 4]]
// [[1, 1, 3, 3], [2, 3, 2, 4], [3, 1, 4, 2], [2, 2, 4, 4]] 
// [[0, 0, 4, 1], [7, 0, 8, 2], [6, 2, 8, 3], [5, 1, 6, 3], [4, 0, 5, 1], [6, 0, 7, 2], [4, 2, 5, 3], [2, 1, 4, 3], [0, 1, 2, 2], [0, 2, 2, 3], [4, 1, 5, 2], [5, 0, 6, 1]]
