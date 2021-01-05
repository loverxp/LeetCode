// https://leetcode-cn.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var minimumDistance = function (word) {
    const n = word.length;
    if (n == 2) return 0;
    const chars = new Set(word);
    const keyboard = ["ABCDEF", "GHIJKL", "MNOPQR", "STUVWX", "YZ",];
    const coords = new Map();
    for (let i = 0; i < keyboard.length; i++) {
        const line = keyboard[i];
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (chars.has(char)) {
                coords.set(char, [j, i]);
            }
        }
    }
    const distanceBetween = (char1, char2) => {
        // console.log({ coords });
        // console.log(coords.get(char1));
        const [x1, y1] = coords.get(char1);
        const [x2, y2] = coords.get(char2);
        // console.log({ x1, y1 }, { x2, y2 });
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const distanceBetweenIndex = (i1, i2) => distanceBetween(word[i1], word[i2]);

    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array(n).fill(Infinity)));
    // const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
    dp[0][0][0] = 0;

    // console.log(dp[0]);
    Matrix.logMatrixInArray(dp[0]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // (0,0) -> (0,1)
    // dp[1][0][1] = 0;
    dp[1][0][1] = dp[0][0][0];
    // dp[1][1][0] = distanceBetweenIndex(1, 0)
    dp[1][1][0] = dp[0][0][0] + distanceBetweenIndex(1, 0)
    // console.log(dp[1]);
    Matrix.logMatrixInArray(dp[1]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    dp[2][0][2] = dp[1][0][1] + distanceBetweenIndex(2, 1);
    //(0,0) -> (0,1) -> (2,1)
    dp[2][2][1] = dp[1][0][1] + distanceBetweenIndex(2, 0);
    //(0,0) -> (1,0) -> (1,2)
    dp[2][1][2] = dp[1][1][0];

    dp[2][2][0] = dp[1][1][0] + distanceBetweenIndex(2, 1);
    // console.log(dp[2]);
    Matrix.logMatrixInArray(dp[2]);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    dp[3][0][3] = dp[2][0][2] + distanceBetweenIndex(3, 2);
    dp[3][3][2] = dp[2][0][2] + distanceBetweenIndex(3, 0);

    dp[3][2][3] = dp[2][2][1] + distanceBetweenIndex(3, 1);
    dp[3][3][1] = dp[2][2][1] + distanceBetweenIndex(3, 2);

    dp[3][1][3] = dp[2][1][2] + distanceBetweenIndex(3, 2);
    dp[3][3][2] = dp[2][1][2] + distanceBetweenIndex(3, 1);

    dp[3][2][3] = dp[2][2][0];
    dp[3][3][0] = dp[2][2][0] + distanceBetweenIndex(3, 2);

    // console.log(dp[2]);
    Matrix.logMatrixInArray(dp[3]);


    return distanceBetween('C', 'K');
    // return;
    // return dp[3];

    // let dp = Array.from({ length: 2 }, () => Array.from({ length: 1 }, () => Infinity));
    // dp[0][0] = 0;

    for (let i = 1; i < n; i++) {
        // const dp2 = Array.from({ length: 2 }, () => Array.from({ length: i + 1 }, () => Infinity));

        // dp2[0][]
        // arr1 = dp2[0];
        // arr1[0]


        // dp = dp2;
    }



};

function test(word) {
    Test.test(minimumDistance, word);
}

test("CAKE");
// test("HAPPY");
// test("NEW");
// test("YEAR");

