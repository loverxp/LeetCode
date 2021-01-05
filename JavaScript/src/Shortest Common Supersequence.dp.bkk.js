// https://leetcode-cn.com/problems/shortest-common-supersequence/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');


var shortestCommonSupersequence = function (str1, str2) {
    const [m, n] = [str1.length, str2.length];

    const concat = (str, char, sameType) => !sameType && str.length && str[str.length - 1] == char ? str : str + char;
    const select = (str1, str2) => str1.length < str2.length ? str1 : str2;     // == ??
    // const select = (str1, str2, nextChar) => str1.length < str2.length ? str1 : str2;     // == ??

    const dp1 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));
    const dp2 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));

    for (let i = 1; i <= m; i++) {
        dp1[i][0] = dp1[i - 1][0] + str1[i - 1];
        dp2[i][0] = dp2[i - 1][0] + str1[i - 1];
    }

    for (let j = 1; j <= n; j++) {
        dp1[0][j] = dp1[0][j - 1] + str2[j - 1];
        dp2[0][j] = dp2[0][j - 1] + str2[j - 1];
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const s1 = concat(dp1[i][j - 1], str2[j - 1], 1);
            const s2 = concat(dp2[i][j - 1], str2[j - 1], 0);
            dp1[i][j] = select(s1, s2);

            const s3 = concat(dp1[i - 1][j], str1[i - 1], 0);
            const s4 = concat(dp2[i - 1][j], str1[i - 1], 1);

            dp2[i][j] = select(s3, s4);
            // if (str1[i - 1] == str[j - 1]) {

            // }
            // else {

            // }
        }
    }
    // Matrix.logMatrixInString(dp);
    // Matrix.logMatrixInArray(dp);


    // return dp;
    return select(dp1[m][n], dp2[m][n]);
};

function run(str1, str2) {
    Test.run(shortestCommonSupersequence, str1, str2);
}

run('a', 'b');
// "cabac"
run("abac", "cab")
run("hogtk", "zaskv")
run("kpbkncczcg", "curlbjnbdh");