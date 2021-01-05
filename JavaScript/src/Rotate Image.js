// https://leetcode-cn.com/problems/rotate-image/
var Test = require('./Common/Test');

var rotate = function (matrix) {

};

function run(matrix) {
    Test.run(rotate, matrix);
}


run([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
run([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])
run([[1]])
run([[1, 2], [3, 4]])

