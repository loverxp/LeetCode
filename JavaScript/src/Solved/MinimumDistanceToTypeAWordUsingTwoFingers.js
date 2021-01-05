// https://leetcode-cn.com/problems/minimum-distance-to-type-a-word-using-two-fingers/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

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
        const [x1, y1] = coords.get(char1);
        const [x2, y2] = coords.get(char2);
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const distanceBetweenIndex = (i, j) => {
        if (i == j) return 0;
        return distanceBetween(word[i], word[j]);
    }

    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
    dp[0][0] = 0;
    dp[0][1] = 0;
    dp[1][0] = distanceBetweenIndex(1, 0);

    for (let i = 2; i < n; i++) {
        for (let j = 0; j < i - 1; j++) {
            const prev = dp[j][i - 1];
            dp[j][i] = prev + distanceBetweenIndex(i, i - 1);
            dp[i][i - 1] = Math.min(dp[i][i - 1], prev + distanceBetweenIndex(i, j));
        }
        for (let j = 0; j < i - 1; j++) {
            const prev = dp[i - 1][j];
            if (j == 0) {
                dp[i - 1][i] = prev;
            }
            else {
                dp[i - 1][i] = Math.min(dp[i - 1][i], prev + distanceBetweenIndex(i, j));
            }
            dp[i][j] = prev + distanceBetweenIndex(i, i - 1);
        }
    }
    return Math.min(Math.min(...dp[n - 1]), Math.min(...(dp.map(arr => arr[n - 1]))));
};

function test(word) {
    Test.test(minimumDistance, word);
}

// test("CAKE");
// test("HAPPY");
// test("NEW");
// test("YEAR");
// test('KTZHGJABDAMUUSWQZSQJOFDKFBUVTPNIRMXFDBTNCTNELVSDLXQOXEWCFSKBTWCRXAVMBNIHRVSOWGVABKXNJXITEWKZFFXGADJW');
// test('ISUGYSZSGNZBRXUPJENMOHJFTIEZWOGFRZVWJXCNLJECTCPCMRQOCGWYVRTIKFKHRTYTFHKDKXJUVZEANBWATIYRGZJPLTXZMVLEBIEZAUOTSWIIKRNDYUGOOLJSMIZORHVBZCZFJDTXWPHESCGXHAEYVSNTTNMABBUNOTMAUNYICJBOFCCVLKJVPUUDXIUNLLQVVMYOLRFIQDAHMTCXMMWBFFZGGRRQDRLGXPDNGWQYMNWYXLYHEIMXLKGGHGNPHKYSCIPGDVVRQCBSHSANIOCAXJDPFYYXJTUCLBFXZLIR');

function randomTest(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.trunc(65 + Math.random() * 26));
    }
    Test.test(minimumDistance, String.fromCharCode(...arr));
}

// randomTest(100);
// randomTest(300);
// randomTest();
// randomTest();
// randomTest();
