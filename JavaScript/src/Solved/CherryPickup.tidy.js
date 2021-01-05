// https://leetcode-cn.com/problems/cherry-pickup/
var Test = require('../Common/Test');
var Matrix = require('../Common/Matrix').Matrix;

var cherryPickup = function (grid) {
    const n = grid.length;
    if (n == 0) return 0;
    if (n == 1) return grid[0][0];

    let dp = [[grid[0][0]]];

    for (let step = 1; step < n * 2 - 1; step++) {

        const dp2 = Array(n).fill(0).map(a => Array(n).fill(Number.MIN_SAFE_INTEGER));
        for (let x1 = Math.max(0, step - n + 1); x1 < Math.min(step + 1, n); x1++) {
            const y1 = step - x1;

            for (let x2 = Math.max(0, step - n + 1); x2 <= x1; x2++) {
                const y2 = step - x2;
                if (grid[y1][x1] != -1 && grid[y2][x2] != -1) {
                    const val = grid[y1][x1] + (x1 != x2 ? grid[y2][x2] : 0);
                    let max = Number.MIN_SAFE_INTEGER;
                    for (let i = x1 - 1; i <= x1; i++) {
                        if (i >= 0 && i < dp.length) {
                            for (let j = x2 - 1; j <= x2; j++) {
                                if (j >= 0 && j < dp[i].length) {
                                    max = Math.max(max, dp[i][j]);
                                }
                            }
                        }
                    }
                    dp2[x1][x2] = max + val;

                }
            }
        }

        dp = dp2;
    }

    return Math.max(0, dp[n - 1][n - 1]);
};

function test(input) {
    Matrix.logMatrixInArray(input);
    const test = new Test.Test(cherryPickup, input);
    test.logArgs = false;
    test.do();
}

input1 = [
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1]];

input2 = [
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]];

input22 = [
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]];

input3 = [
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1]];

input33 = [
    [1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1]];



// test(input1);
// test(input2);
// test(input22);
// test(input3);
// test(input33);
test([[1, 1, -1], [1, -1, 1], [-1, 1, 1]]);

function testTriangleArray() {
    const array = [];
    for (let i = 0; i < 5; i++) {
        const a = [];
        array.push({ i, array: a });
        for (let j = 0; j <= i; j++) {
            a.push(j);
        }
    }
    console.log(array);
}

// testTriangleArray();

// [[1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 1], [1, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 1]]