// https://leetcode-cn.com/problems/maximal-rectangle/
var Test = require('./Common/Test');

var maximalRectangle = function (matrix) {
    let maxArea = 0;
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            let grid = row[j];
            if (grid > 0) {
                let x = j, y = i;


            }
        }
    }
};

function test(input) {
    Test.test(maximalRectangle, input);
}

input1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];

test(input1);