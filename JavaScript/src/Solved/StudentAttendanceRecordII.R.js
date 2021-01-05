// https://leetcode-cn.com/problems/student-attendance-record-i/
var Test = require('./Common/Test');

var checkRecord = function (n) {
    return btm(n, false, 0);

    function btm(n, existA, countL) {
        if (--n == 0) {
            return 1 + (existA ? 0 : 1) + (countL == 2 ? 0 : 1);
        }
        else {
            const sum1 = btm(n, existA, 0);                 //next is P
            const sum2 = existA ? 0 : btm(n, true, 0);      //next is A
            const sum3 = countL == 2 ? 0 : btm(n, existA, ++countL); //next is L
            return sum1 + sum2 + sum3;
        }
    }
};

function test(n) {
    Test.test(checkRecord, n);
}

// test(1);
// test(2);        // 8
// test(3);        // 19
// test(4);        // 43
test(5);        // 94