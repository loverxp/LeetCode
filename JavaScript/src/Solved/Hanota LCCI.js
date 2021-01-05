// https://leetcode-cn.com/problems/hanota-lcci/
var Test = require('../Common/Test');

var hanota = function (A, B, C) {

    move(A, B, C, A.length)

    function move(s1, s2, s3, steps) {
        if (s1.length && steps) {
            // console.log();
            move(s1, s3, s2, steps - 1);
            s3.push(s1.pop());
            move(s2, s1, s3, steps - 1);
            // console.log({ A });
            // console.log({ B });
            // console.log({ C });
        }
    }
}

function run(A, B, C) {
    Test.run(hanota, A, B, C);
    console.log(A);
    console.log(B);
    console.log(C);
}

run([2, 1, 0], [], [])
run([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [], [])