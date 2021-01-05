// https://leetcode-cn.com/problems/last-stone-weight/
var Test = require('../Common/Test');

var lastStoneWeight = function (stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => a - b);
        console.log({ stones });
        const difference = stones.pop() - stones.pop();
        if (difference > 0) stones.push(difference);
    }
    return stones.length ? stones[0] : 0;
};

function test(stones) {
    Test.test(lastStoneWeight, stones);
}

test([2, 7, 4, 1, 8, 1]);