// https://leetcode-cn.com/problems/reducing-dishes/
var Test = require('../Common/Test');

var maxSatisfaction = function (satisfaction) {
    const n = satisfaction.length;
    satisfaction.sort((a, b) => b - a);

    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += satisfaction[i];
        if (sum1 >= 0) {
            sum2 += sum1;
        }
        else {
            return sum2;
        }
    }
    return sum2;
};

function run(satisfaction) {
    Test.run(maxSatisfaction, satisfaction);
}

run([-1, -8, 0, 5, -9])
run([4, 3, 2])
run([-1, -4, -5])
run([-2, 5, -1, 0, 3, -3])

// [-1, -8, 0, 5, -7]
// [4, 3, 2]
// [-1, -4, -5]
// [-2, 5, -1, 0, 3, -3]