// https://leetcode-cn.com/problems/valid-permutations-for-di-sequence/
var Test = require('./Common/Test');

var numPermsDISequence = function (S) {
    const mod = 1e9 + 7;
    const n = S.length;
    const isIncrement = (i) => S[i] == 'I';

    let dp1 = Array(n + 1).fill(0);
    let dp2 = Array(n + 1).fill(0);
    dp1[0] = 1;

    for (let i = 1; i <= n; i++) {
        if (!isIncrement(i - 1)) {
            dp2[i] = dp1[i];
            for (let j = i - 1; j >= 0; j--) {
                dp2[j] = (dp1[j] + dp2[j + 1]) % mod;
            }
        }
        else {
            dp2[0] = 0;
            for (let j = 1; j <= i; j++) {
                dp2[j] = (dp1[j - 1] + dp2[j - 1]) % mod;
            }
        }
        [dp1, dp2] = [dp2, dp1];
    }
    return dp1.reduce((a, b) => (a + b) % mod);
}

function run(S) {
    Test.run(numPermsDISequence, S);
}

// 5
// run("DID");
// run("DDD");

// 18694
run("DDIDIIDID")

// 997381513
run("IIDIIDDIDDDDIIDDIDIDIDDDDIDDDIIIIDDIDDDDIDIIDDIDID")