// https://leetcode-cn.com/problems/longest-duplicate-substring/
var Test = require('../Common/Test');


var longestDupSubstring = function (s) {
    const n = s.length;
    const mod = 2 ** 32;

    return binarySearch(1, n - 1);

    function binarySearch(low, high) {
        if (low > high) return "";
        const mid = Math.trunc((low + high) / 2);
        const found = rabinKap(mid);

        if (found.length) {
            const found2 = binarySearch(mid + 1, high);
            return found2.length ? found2 : found;
        }
        else {
            return binarySearch(low, mid - 1);
        }
    }

    function rabinKap(len) {
        let pow = 1;
        for (let i = 0; i < len; i++) {
            pow *= 26;
            pow %= mod;
        }

        let code = 0;
        for (let i = 0; i < len; i++) {
            code *= 26;
            code %= mod;
            code += codeAt(i);
        }

        const set = new Set([code]);
        for (let i = 0; i + len < n; i++) {
            code *= 26;
            code -= codeAt(i) * pow % mod;
            code += mod;
            code %= mod;
            code += codeAt(i + len);
            code %= mod;
            if (set.has(code)) {
                return s.slice(i + 1, i + len + 1);
            }
            else {
                set.add(code);
            }
        }
        return "";
    }

    function codeAt(i) {
        return s.charCodeAt(i) - 97;

    }
}

function run(s) {
    Test.run(longestDupSubstring, s);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(longestDupSubstring, id);
}


run("banana")
// run("abcd")
run("The most popular dictionary and thesaurus for learners of English. Meanings and definitions of words with pronunciations and translations")

//"hmrgp"
// testWithTestcase(109060285);
// testWithTestcase(109067782);