// https://leetcode-cn.com/problems/shortest-common-supersequence/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');


var shortestCommonSupersequence = function (str1, str2) {
    const [m, n] = [str1.length, str2.length];
    let result;
    let count = 0;
    dfs(0, 0, new Set([""]), 0);
    return result;

    function dfs(i, j, prefixes, type) {
        if (i == m && j == n) {
            for (const prefix of prefixes) {
                console.log(++count);
                console.log(prefix);
                if (!result) {
                    result = prefix;
                }
                else {
                    // if (prefix.length < result.length) {
                    if (prefix.length < result.length || (prefix.length == result.length && prefix < result)) {
                        result = prefix;
                    }
                }
            }
        }
        else {
            if (i < m) {
                const prefixes2 = new Set();
                for (const prefix of prefixes) {
                    prefixes2.add(type != 1 && prefix.length && prefix[prefix.length - 1] == str1[i] ? prefix : prefix + str1[i]);
                }
                dfs(i + 1, j, prefixes2, 1);
            }
            if (j < n) {
                const prefixes2 = new Set();
                for (const prefix of prefixes) {
                    prefixes2.add(type != 2 && prefix.length && prefix[prefix.length - 1] == str2[j] ? prefix : prefix + str2[j]);
                }
                dfs(i, j + 1, prefixes2, 2);
            }
        }
    }
};

function run(str1, str2) {
    Test.run(shortestCommonSupersequence, str1, str2);
}

function randomTest(n) {
    Test.test(shortestCommonSupersequence, randomString(n), randomString(n));

    function randomString(n) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(Math.trunc(97 + Math.random() * 26));
        }
        return String.fromCharCode(...arr);
    }
}

// "cabac"
// run("abac", "cab")
// run("kpbkncczcg", "curlbjnbdh");
// run("hogtk", "zaskv")
run("aaa", "aa")

// randomTest(10);
// randomTest(5);