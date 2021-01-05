// https://leetcode-cn.com/problems/qie-fen-shu-zu/
var Test = require('./Common/Test');

var splitArray = function (nums) {
    // return gcd(12, 16);
    // return gcd(16, 12);
    return gcd(3, 7);

    function gcd(a, b) {
        let temp = a;
        while (a != 0) {
            temp = b % a;
            b = a;
            a = temp;
        }
        return b;
    }
};

function run(nums) {
    Test.run(splitArray, nums);
}

run([2, 3, 3, 2, 3, 3]);
run([2, 3, 5, 7]);
