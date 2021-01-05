// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');

var isMatch = function (s, p) {
    const keys = new Set();
    let count = 0;
    return dfs(-1, -1);
    console.log({ count });
    // return;
    // return dfs(-1, -1);

    function dfs(x, y) {
        const key = `${x},${y}`;
        if (keys.has(key)) {
            console.log("has key:", key);
            return false;
        }
        else {
            count++;
            keys.add(key);

            // console.log();
            // console.log({ x, y });
            if (x < s.length && y < p.length) {
                let result = false;
                if (p[y] == '*') {
                    const pattern = p[y - 1];
                    if (pattern == '.' || s[x + 1] == pattern) {
                        result = dfs(x + 1, y);
                    }
                }
                if (!result && p[y + 2] == '*') {
                    result = dfs(x, y + 2);
                }
                if (!result) {
                    const pattern = p[y + 1];
                    if (pattern == '.' || s[x + 1] == pattern) {
                        result = dfs(x + 1, y + 1);
                    }
                }
                return result;
            }
            else {
                return x == s.length && y == p.length;
            }
        }
    }
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

test("ab", "ab");
test("a", "a*");
test("aaa", "a*");
test("a", ".*..a*")
test("", "");

// test("aa", "a");
// test("aa", "a*");
// test("aa", ".*");
// test("ab", ".*");
// test("aab", "c*a*b");
test("mississippi", "mis*is*p*.");