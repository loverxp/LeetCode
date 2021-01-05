// https://leetcode-cn.com/problems/super-egg-drop/
var Test = require('./Common/Test');

var superEggDrop = function (k, n) {

    return binarySearch(k, 0, n, 0);

    function binarySearch(k, l, r, steps) {
        Test.log();
        Test.log({ l, r });
        if (l < r) {
            const mid = Math.trunc(l + (r - l) / 2);
            Test.log({ mid });
            steps++;
            return Math.max(binarySearch(k, l, mid, steps), binarySearch(k, mid + 1, r, steps));
            // return Math.max(binarySearch(k, l, mid, steps), binarySearch(k, mid + 1, r, steps));
        }
        else {
            return steps;
        }
    }
};

function run(k, n) {
    Test.run(superEggDrop, k, n);
}

// run(1, 2)
// run(2, 6)
// run(3, 14)
// run(2, 100);        //14
// run(2, 1000);       //45
// run(2, 10000);      //141

// run(1, 10)          //10
// run(2, 10)          //4
// run(3, 10)          //4
// run(1, 100)         //100
// run(2, 100)         //14
// run(3, 100)         //9

run(2, 11)          //5
run(2, 12)          //5
run(2, 13)          //5
run(2, 14)          //5
run(2, 15)          //5
run(2, 16)          //6
run(2, 17)          //6