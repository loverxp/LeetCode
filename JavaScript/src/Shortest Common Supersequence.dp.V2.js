// https://leetcode-cn.com/problems/shortest-common-supersequence/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');


var shortestCommonSupersequence = function (str1, str2) {
    const [m, n] = [str1.length, str2.length];

    // const isKeepType = (str, char) => str.length && str[str.length - 1] == char;

    // const concat = (str, char) => str.length && str[str.length - 1] == char ? str : str + char;
    // const concat = (str, char) => str[str.length - 1] == char ? str : str + char;
    const concat = (str, char) => str[str.length - 1] == char ? [false, str] : [true, str + char];

    // const concat = (str, char, sameType) => !sameType && str.length && str[str.length - 1] == char ? str : str + char;
    // const concat = (str, char, sameType) => sameType && str.length && str[str.length - 1] == char ? str : str + char;
    // const select = (str1, str2) => str1.length <= str2.length ? str1 : str2;     // == ??
    const select = (str1, str2) => {
        console.log({ str1, str2 });
        return str1.length <= str2.length ? str1 : str2;     // == ??
    }
    // const select = (str1, str2, nextChar) => str1.length < str2.length ? str1 : str2;     // == ??

    // const dp1 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => " "));
    // const dp2 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => " "));
    const dp1 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));
    const dp2 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));
    // dp1[0][0] = "  ";
    // dp2[0][0] = "  ";

    for (let i = 1; i <= m; i++) {
        dp1[i][0] = dp1[i - 1][0] + str1[i - 1];
        dp2[i][0] = dp2[i - 1][0] + str1[i - 1];
        // dp1[i][0] = str1.slice(0, i) + " ";
        // dp2[i][0] = " " + str1.slice(0, i);
    }

    for (let j = 1; j <= n; j++) {
        dp1[0][j] = dp1[0][j - 1] + str2[j - 1];
        dp2[0][j] = dp2[0][j - 1] + str2[j - 1];
        // dp1[0][j] = " " + str2.slice(0, j);
        // dp2[0][j] = str2.slice(0, j) + " ";
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            console.log();
            console.log({ i, j });
            console.log(dp1);
            console.log(dp2);

            // const concat = (str, char, sameType) => !sameType && str.length && str[str.length - 1] == char ? str : str + char;

            // const updateDP = (str, char, type) => {
            //     if (condition) {

            //     }
            // }

            // const s1 = dp1[i][j - 1] + str2[j - 1];
            // const [change1, s2] = concat(dp2[i][j - 1], str2[j - 1]);
            // const [change2, s3] = concat(dp1[i - 1][j], str1[i - 1]);
            // const s4 = dp2[i - 1][j] + str1[i - 1];

            dp1[i][j] = dp1[i][j - 1] + str2[j - 1];
            dp2[i][j] = dp2[i - 1][j] + str1[i - 1];
            const [change1, s1] = concat(dp2[i][j - 1], str2[j - 1]);
            if (change1) {
                dp1[i][j] = select(dp1[i][j], s1);
            }
            else {
                dp2[i][j] = select(dp2[i][j], s1);
            }
            const [change2, s2] = concat(dp1[i - 1][j], str1[i - 1]);
            if (change2) {
                dp2[i][j] = select(dp2[i][j], s2);
            }
            else{
                dp1[i][j] = select(dp1[i][j], s2);
            }




            // dp1[i][j] = select(concat(dp1[i][j - 1], str2[j - 1], 1), concat(dp2[i][j - 1], str2[j - 1], 0));
            // dp2[i][j] = select(concat(dp1[i - 1][j], str1[i - 1], 0), concat(dp2[i - 1][j], str1[i - 1], 1));

            // dp1[i][j] = select(concat(dp1[i][j - 1], str2[j - 1], 0), concat(dp2[i][j - 1], str2[j - 1], 1));
            // dp2[i][j] = select(concat(dp1[i - 1][j], str1[i - 1], 1), concat(dp2[i - 1][j], str1[i - 1], 0));

            // dp1[i][j] = select(concat(dp1[i - 1][j], str1[i - 1], 1), concat(dp2[i - 1][j], str1[i - 1], 0));
            // dp2[i][j] = select(concat(dp1[i][j - 1], str2[j - 1], 0), concat(dp2[i][j - 1], str2[j - 1], 1));

            // dp1[i][j] = select(concat(dp1[i - 1][j], str1[i - 1], 0), concat(dp2[i - 1][j], str1[i - 1], 1));
            // dp2[i][j] = select(concat(dp1[i][j - 1], str2[j - 1], 1), concat(dp2[i][j - 1], str2[j - 1], 0));
        }
    }
    // Matrix.logMatrixInString(dp);
    // Matrix.logMatrixInArray(dp);

    console.log();
    console.log(dp1);
    console.log(dp2);

    // return dp;
    console.log(select(dp1[m][n], dp2[m][n]).length);

    return select(dp1[m][n], dp2[m][n]);
    // return select(dp1[m][n], dp2[m][n]).length;
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


function testString(str1, str2) {
    console.log({ str1 });
    console.log({ str2 });
    concat(str1, str2);
    console.log({ str1 });

    function concat(str1, str2) {
        str1 += str2;
    }
}

// function testString(str1) {
// const set = new Set();
// }

// run('a', 'b');
// "cabac"
// run("abac", "cab")
// run("aaaaaaaa", "aaaaaaaa")
// run("aa", "aa")
run("aaa", "aa")
// run("aa", "aaa")

// run("abc", "dc")
// run("dc", "abc")
// run("ab", "b")
// run("b", "ab")

// run("abcd", "bcdef");
// run("hogtk", "zaskv")
// run("kpbkncczcg", "curlbjnbdh");
// 'ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj'
// run('fialyxmhjhbwxrvophblbakvgtqmgeeqvuxxgbhuarreymwvxrguyorbwriiwknyywjsgxiosknqsmdvzszlthhzorsqyellmzpj',
// 'ntqyufbaklrdemqbvuogafrqtmycknreznolwzskowokfyoyquhlmanghifybzrkajkgluibmgbzrvuhxkakhzewqnosfaaogcdg')

// randomTest(100);
// randomTest(1000);

// Test.compareStr('ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj',
// 'ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj')


// testString("abac", "cab")