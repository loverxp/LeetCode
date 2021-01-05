// https://leetcode-cn.com/problems/student-attendance-record-i/
var Test = require('../Common/Test');

var checkRecord = function (s) {
    let existA = false;
    let countL = 0;

    for (const char of s) {
        if (char == 'L') {
            if (++countL == 3) {
                return false;
            }
        }
        else {
            countL = 0;
            if (char == 'A') {
                if (existA) {
                    return false;
                }
                else {
                    existA = true;
                }
            }
        }
    }
    return true;
};

function test(s) {
    Test.test(checkRecord, s);
}

test("PPALLP");
test("PPALLL");