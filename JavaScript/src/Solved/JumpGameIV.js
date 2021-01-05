// https://leetcode-cn.com/problems/jump-game-iv/
var Test = require('../Common/Test');

var minJumps = function (nums) {
    nums = nums.reduce((nums, num) => {
        if (nums.length < 2 || num != nums[nums.length - 1] || num != nums[nums.length - 2]) {
            nums.push(num);
        }
        return nums;
    }, []);

    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!map.has(num)) {
            map.set(num, new Set());
        }
        map.get(num).add(i);
    }
    const steps = Array(nums.length).fill(Infinity);
    steps[0] = 0;
    const queue = [0];
    while (queue[0] != nums.length - 1) {
        const index = queue.shift();
        const step = steps[index] + 1;
        if (index > 0) setStep(index - 1, step);
        if (index < nums.length - 1) setStep(index + 1, step);
        for (const i of map.get(nums[index])) setStep(i, step);
    }
    return steps[queue[0]];

    function setStep(index, step) {
        if (step < steps[index]) {
            steps[index] = step;
            queue.push(index);
        }
    }
};

function test(arr) {
    Test.test(minJumps, arr);
}

test([100, -23, -23, 404, 100, 23, 23, 23, 3, 404]);
test([7]);
test([7, 6, 9, 6, 9, 6, 9, 7]);
test([6, 1, 9]);
test([11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13]);
test(a = Array(50000).fill(7), a.push(11), a);
// test(a = Array(40000).fill(7), a.push(11), a);