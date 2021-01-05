// https://leetcode-cn.com/problems/regular-expression-matching/
var Test = require('../Common/Test');

var isMatch = function (s, p) {
    const keys = new Set();
    const stack = [[-1, -1, 3]];
    while (stack.length) {
        const [x, y, tryCount] = state = stack[stack.length - 1];
        const key = `${x},${y},${tryCount}`;
        // console.log("");
        if (keys.has(key)) {
            console.log(key);
        }
        else {
            keys.add(key);
        }

        if (x < s.length && y < p.length) {
            state[2]--;
            switch (tryCount) {
                case 3:
                    if (p[y] == '*') {
                        const pattern = p[y - 1];
                        if (pattern == '.' || s[x + 1] == pattern) {
                            stack.push([x + 1, y, 3]);
                        }
                    }
                    break;
                case 2:
                    if (p[y + 2] == '*') {
                        stack.push([x, y + 2, 3]);
                    }
                    break;
                case 1: {
                    const pattern = p[y + 1];
                    if (pattern == '.' || s[x + 1] == pattern) {
                        stack.push([x + 1, y + 1, 3]);
                    }
                    break;
                }
                case 0:
                    stack.pop();
                    break;
            }
        }
        else {
            stack.pop();
            if (x == s.length && y == p.length) return true;
        }
    }
    return false;
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

test("ab", "ab");
test("a", "a*");
test("aaa", "a*");
test("a", ".*..a*")
test("", "");

test("aa", "a");
test("aa", "a*");
test("aa", ".*");
test("ab", ".*");
test("aab", "c*a*b");
test("mississippi", "mis*is*p*.");
