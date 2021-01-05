// https://leetcode-cn.com/problems/random-pick-index/
var Test = require('../Common/Test');

var Solution = function (nums) {
    this.numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!this.numMap.has(num)) {
            this.numMap.set(num, []);
        }
        const array = this.numMap.get(num);
        array.push(i);
    }
};

Solution.prototype.pick = function (target) {
    const array = this.numMap.get(target);
    const index = Math.trunc(Math.random() * array.length);
    return array[index];

};

function sequenceTest(ops, params) {
    Test.testWithInstructions(Solution, ops, params);
}

sequenceTest(["Solution", "pick"],
    [[[1, 2, 3, 3, 3]], [3]]);