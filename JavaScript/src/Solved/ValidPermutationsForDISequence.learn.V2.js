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
        for (let j = 0; j <= i; j++) {
            if (!isIncrement(i - 1)) {
                dp2[j] = 0;
                for (let k = j; k <= i; k++) {
                    dp2[j] += dp1[k];
                    dp2[j] %= mod;
                }
            }
            else {
                dp2[j] = 0;
                for (let k = 0; k < j; k++) {
                    dp2[j] += dp1[k];
                    dp2[j] %= mod;
                }
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