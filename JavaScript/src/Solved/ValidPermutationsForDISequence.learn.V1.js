// https://leetcode-cn.com/problems/valid-permutations-for-di-sequence/
var Test = require('../Common/Test');

var numPermsDISequence = function (S) {
    const mod = 1e9 + 7;
    const n = S.length;
    const increments = S.split('').map(char => char == 'I');
    let dp1 = Array(n + 1).fill(1);
    let dp2 = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        dp2.fill(0)
        for (let j = 0; j <= n; j++) {
            if (!increments[i]) {
                for (let k = j; k <= i; k++) {
                    dp2[j] += dp1[k];
                    dp2[j] %= mod;
                }
            }
            else {
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
run("DID");
// 18694
run("DDIDIIDID")