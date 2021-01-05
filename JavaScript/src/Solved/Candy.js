// https://leetcode-cn.com/problems/candy/
var Test = require('../Common/Test');

var candy = function (ratings) {
    const len = ratings.length;
    let total = len;
    let highIndex = 0;
    let highNum = 0;
    let lowNum = 0;
    for (let i = 1; i < len; i++) {
        const prevVal = ratings[i - 1];
        const val = ratings[i];
        if (val > prevVal) {
            highIndex = i;
            highNum = ++lowNum;
            total += highNum;
        }
        else if (val == prevVal) {
            highIndex = i;
            lowNum = 0;
            highNum = 0;
        }
        else {
            total += i - highIndex;
            if (i - highIndex <= highNum) total--;
            lowNum = 0;
        }
    }
    return total;
};

function test(ratings) {
    Test.test(candy, ratings);
}

// test([1, 0, 2]);
// test([1, 2, 2]);

// test([4, 3, 2, 1, 0, 1, 2, 3, 7, 2, 2]);
// test([4, 3, 4, 2, 1, 0, 1, 2, 3, 7, 2, 2]);
test([4, 3, 4, 2, 1, 0, 1, 2, 3, 7, 2, 2, 1, 0]);
test([4, 3, 4, 2, 1, 0, 1, 2, 3, 7, 2, 2, 0]);
// test([1, 3, 2, 2, 1]);
