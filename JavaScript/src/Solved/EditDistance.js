// https://leetcode-cn.com/problems/edit-distance/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var minDistance = function (word1, word2) {
    const len1 = word1.length + 1;
    const len2 = word2.length + 1;
    const dp = Array(len2).fill(0).map(a => Array(len1).fill(0));

    for (let y = 0; y < len2; y++) {
        dp[y][0] = y;
    }
    for (let x = 0; x < len1; x++) {
        dp[0][x] = x;
    }
    Matrix.logMatrixInArray(dp);

    for (let y = 1; y < len2; y++) {
        for (let x = 1; x < len1; x++) {
            dp[y][x] = Math.min(
                dp[y][x - 1] + 1,
                dp[y - 1][x] + 1,
                dp[y - 1][x - 1] + (word1[x - 1] == word2[y - 1] ? 0 : 1));
        }
    }
    Matrix.logMatrixInArray(dp);
    return dp[word2.length][word1.length];
};

function test(word1, word2) {
    Test.test(minDistance, word1, word2);
}

test("horse", "ros");
test("intention", "execution");