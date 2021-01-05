// https://leetcode-cn.com/problems/maximum-candies-you-can-get-from-boxes/
var Test = require('../Common/Test');

var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
    const needKeys = new Set();
    let sum = 0;
    let queue = initialBoxes;
    while (queue.length) {
        const i = queue.shift();
        if (status[i]) {
            sum += candies[i];
            queue.push(...containedBoxes[i]);
            for (const key of keys[i]) {
                status[key] = 1;
                if (needKeys.has(key)) {
                    queue.push(key);
                    needKeys.delete(key);
                }
            }
        }
        else {
            needKeys.add(i);
        }
    }
    return sum;
};

function run(status, candies, keys, containedBoxes, initialBoxes) {
    Test.run(maxCandies, status, candies, keys, containedBoxes, initialBoxes);
}

run([1, 0, 1, 0], [7, 5, 4, 100], [[], [], [1], []], [[1, 2], [3], [], []], [0])
run([1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1], [[1, 2, 3, 4, 5], [], [], [], [], []], [[1, 2, 3, 4, 5], [], [], [], [], []], [0])
run([1, 1, 1], [100, 1, 100], [[], [0, 2], []], [[], [], []], [1])
run([1], [100], [[]], [[]], [])
run([1, 1, 1], [2, 3, 2], [[], [], []], [[], [], []], [2, 1, 0])