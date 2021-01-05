// https://leetcode-cn.com/problems/shortest-common-supersequence/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');


var shortestCommonSupersequence = function (str1, str2) {
    const [m, n] = [str1.length, str2.length];

    const dp1 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));
    const dp2 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ""));

    // const used1 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    // const used2 = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    const concat = (str, char, sameType) => !sameType && str.length && str[str.length - 1] == char ? str : str + char;
    const select = (str1, str2) => str1.length <= str2.length ? str1 : str2;

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
            dp1[i][j] = select(concat(dp1[i][j - 1], str2[j - 1], 1), concat(dp2[i][j - 1], str2[j - 1], 0));
            dp2[i][j] = select(concat(dp1[i - 1][j], str1[i - 1], 0), concat(dp2[i - 1][j], str1[i - 1], 1));
        }
    }

    return select(dp1[m][n], dp2[m][n]);
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

// run('a', 'b');
// "cabac"
// run("abac", "cab")
// run("hogtk", "zaskv")
// run("kpbkncczcg", "curlbjnbdh");
// 'ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj'
// run('fialyxmhjhbwxrvophblbakvgtqmgeeqvuxxgbhuarreymwvxrguyorbwriiwknyywjsgxiosknqsmdvzszlthhzorsqyellmzpj',
// 'ntqyufbaklrdemqbvuogafrqtmycknreznolwzskowokfyoyquhlmanghifybzrkajkgluibmgbzrvuhxkakhzewqnosfaaogcdg')

// randomTest(100);
// randomTest(1000);

// Test.compareStr('ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj',
    // 'ntqyufbiaklyxmhjhbwxrdvophblbakvgtqmgemqbvuoxxgbhuafrqtmeycknmwvxreznguyolrbwzskoriiwokfyoyquhlmanghifybzrkawjksgluxibosknqsmgbzrdvuhxkakzszlthzewqnorsfaaogcdgqyellmzpj')