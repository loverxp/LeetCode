// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
var Test = require('../Common/Test');

var largestRectangleArea = function (heights) {
    if (heights.length == 0) return 0;

    let max = 0;
    let stack = [];
    for (let i = 0; i < heights.length; i++) {
        const height = heights[i];

        console.log({ i, height, max });
        console.log(stack);
        console.log();

        if (height == 0) {
            stack.splice(0);
        }
        else {
            let startIndex = i;
            while (stack.length > 0 && stack[stack.length - 1].height >= height) {
                startIndex = stack.pop().index;
            }
            stack.push({ height, index: startIndex });
            for (let stackIndex = 0; stackIndex < stack.length; stackIndex++) {
                const { height, index } = stack[stackIndex];
                max = Math.max(max, height * (i - index + 1));
            }
        }
    }
    return max;
};

function test(heights) {
    Test.test(largestRectangleArea, heights);
}

input1 = [2, 1, 5, 6, 2, 3];
input2 = [4, 2, 0, 3, 2, 5];
input3 = [3, 6, 5, 7, 4, 8, 1, 0];

// test(input1);
// test(input2);
test(input3);