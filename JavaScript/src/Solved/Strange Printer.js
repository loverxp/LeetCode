// https://leetcode-cn.com/problems/strange-printer/
var Test = require('../Common/Test');

var strangePrinter = function (s) {
    if (s.length == 0) return 0;
    let str = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] != str[str.length - 1]) {
            str += s[i];
        }
    }
    s = str;
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array.from({ length: n }, () => 0)));
    return print(0, n - 1, 0);

    function print(l, r, k) {
        if (l > r) return 0;
        if (dp[l][r][k]) return dp[l][r][k];
        dp[l][r][k] = print(l, r - 1, 0) + 1;
        for (let i = l; i < r; i++) {
            if (s[i] == s[r]) {
                dp[l][r][k] = Math.min(dp[l][r][k], print(l, i, k + 1) + print(i + 1, r - 1, 0));
            }
        }
        return dp[l][r][k];
    }
}

function run(s) {
    Test.run(strangePrinter, s);
}

// run("aaabbb")
// run("aba")

// run("aaabbbaaa")

run("abcbdb");
// run("a");
// run("aa");
// run("aba");
// run("abcb");
// run("acb");
// run("acbb");
// run("abcbb");
// run("acbbb");
// run("babcbb");
// run("acbbbb");
// run("acbbbcdca");
// run("acbbbc");
// run("acb");
// run("aaa");
run("chheecibddfehdhfifbhfdaiecjeccihhfecgdifcidcejgfjg");
// run("chheecibddfehdhfifbhfdaiec");
// run("chheecibddfehdhfifb");
run("chheecibddfehdh");
// run("chheecibddf");

function transform(nums) {
    const str = String.fromCharCode(...nums.map(num => num + 96));
    console.log(str);
}

// transform([1]);
// transform([1, 1]);
// transform([1, 2, 1]);
// transform([1, 2, 3, 2]);

// transform([1, 3, 2]);
// transform([1, 3, 2, 2]);
// transform([1, 2, 3, 2, 2]);
// transform([1, 3, 2, 2, 2]);
// transform([2, 1, 2, 3, 2, 2]);
// transform([1, 3, 2, 2, 2, 2]);

// transform([1, 3, 2, 2, 2, 3, 4, 3, 1]);
// transform([1, 3, 2, 2, 2, 3]);
// transform([1, 3, 2]);
// transform([1, 1, 1]);
// transform([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3, 10, 5, 3, 3, 9, 8, 8, 6, 5, 3, 7, 4, 9, 6, 3, 9, 4, 3, 5, 10, 7, 6, 10, 7]);
// transform([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2, 8, 6, 4, 1, 9, 5, 3]);
// transform([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8, 6, 9, 6, 2]);
// transform([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6, 5, 8, 4, 8]);
// transform([3, 8, 8, 5, 5, 3, 9, 2, 4, 4, 6])