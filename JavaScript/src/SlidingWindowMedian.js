// https://leetcode-cn.com/problems/sliding-window-median/
var Test = require('./Common/Test');
var { Heap } = require('./Common/Heap');

var medianSlidingWindow = function (nums, k) {
    if (k == 0 || nums.length == 0) return 0;
    const len = Math.ceil(k / 2);
    // console.log({ len });

    const startWindow = nums.slice(0, k).sort();
    // console.log({ startWindow });
    const window1 = startWindow.slice(0, len);
    const window2 = startWindow.slice(len - 1, len * 2);

    // console.log(window1);
    // console.log(window2);

    const median = () => (window1[len - 1] + window2[0]) / 2;

    const result = [median()];

    for (let i = 0; i < nums.length - k + 1; i++) {

    }

    // function median() {
    //     startWindow

    // }
    return result;


};

function test(nums, k) {
    Test.test(medianSlidingWindow, nums, k);
}

test([1, 3, -1, -3, 5, 3, 6, 7], 3);