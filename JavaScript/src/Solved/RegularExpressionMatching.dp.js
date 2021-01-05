// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var isMatch = function (s, p) {
    const len1 = p.length;
    const len2 = s.length;
    const dp = Array(len1 + 1).fill(0).map(_ => Array(len2 + 1).fill(false));
    // let dp = new Array(len1 + 1);
    // for (let i = 0; i < dp.length; i++) {
    //     dp[i] = new Array(len2 + 1).fill(false);
    // }
    dp[0][0] = true;
    for (let x = 1; x < len2 + 1; x++) {
        dp[0][x] = false;
    }
    for (let y = 1; y < len1 + 1; y++) {
        dp[y][0] = p[y - 1] == '*' && dp[y - 2][0];
    }
    for (let y = 1; y < len1 + 1; y++) {
        for (let x = 1; x < len2 + 1; x++) {
            const char = s[x - 1];
            const pattern = p[y - 1];
            dp[y][x] = dp[y - 1][x - 1] && (pattern == '.' || pattern == char);
            if (!dp[y][x] && pattern == '*') {
                const pattern = p[y - 2];
                dp[y][x] = dp[y - 2][x] || (dp[y][x - 1] && (pattern == '.' || pattern == char))
            }
        }
    }
    // console.log(dp);
    // Matrix.logBooleanMatrixInArray(dp);
    return dp[len1][len2];
};

function test(s, p) {
    Test.test(isMatch, s, p);
    // Test.repeatTest(100000,isMatch,s,p);
}

// test("aa", "a");
// test("aa", "a*");
// test("ab", ".*");
// test("aab", "c*a*b");

// test("aaa", "ab*a*c*a");

// test("mississippi", "mis*is*p*.");
test("mississpppppppppppppppppi", "mis*is*p*.");

function testSpeed() {
    const len1 = 10;
    const len2 = 10;
    console.time();
    for (let i = 0; i < 100000; i++) {
        let dp = new Array(len1 + 1);
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(len2 + 1).fill(false);
        }
        dp[0][0] = true;
    }
    console.timeEnd();

    console.time();
    for (let i = 0; i < 100000; i++) {
        const dp = Array(len1 + 1).fill(0).map(_ => Array(len2 + 1).fill(false));
        dp[0][0] = true;
    }
    console.timeEnd();
}

// testSpeed();