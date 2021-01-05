// https://leetcode-cn.com/problems/student-attendance-record-i/
var Test = require('./Common/Test');

var checkRecord = function (n) {
    const mod = 1e9 + 7;
    const memo = new Map();
    return btm(n, false, 0);

    function btm(n, existA, countL) {
        const key = `${n},${existA},${countL}`;
        if (!memo.has(key)) {
            if (--n == 0) {
                const sum = 1 + (existA ? 0 : 1) + (countL == 2 ? 0 : 1);
                memo.set(key, sum);
            }
            else {
                const sum1 = btm(n, existA, 0);                 //next is P
                const sum2 = existA ? 0 : btm(n, true, 0);      //next is A
                const sum3 = countL == 2 ? 0 : btm(n, existA, ++countL); //next is L
                memo.set(key, (sum1 + sum2 + sum3) % mod);
            }
        }
        return memo.get(key);
    }
};

function test(n) {
    Test.test(checkRecord, n);
}

// test(1);
// test(2);        // 8
// test(3);        // 19
// test(4);        // 43
// test(5);        // 94
// test(100);      // 985598218
test(200);      // 110821862
// test(1000);      
// test(10000);      
// test(20000);    // 369366140