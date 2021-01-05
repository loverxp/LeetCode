// https://leetcode-cn.com/problems/bulb-switcher/
var Test = require('./Common/Test');

var bulbSwitch = function (n) {
    // if (n == 0) return 0;
    // const lcm = (a, b) => a * b / gcd(a, b);
    // return lcm(4, 6);

    const nums = Array(n).fill(1);
    // return nums;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j += i + 2) {
            nums[j] ^= 1;
        }
        console.log(nums.join(''));
    }
    return nums.reduce((a, b) => a + b);


    function gcd(a, b) {
        while (a != 0) {
            const remainder = b % a;
            b = a;
            a = remainder;
        }
        return b;
    }
};

function run(n) {
    Test.run(bulbSwitch, n);
}

// run(0);
// run(3);
// run(10);
run(20);
// run(99999);
// run(99999999);