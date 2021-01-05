// https://leetcode-cn.com/problems/regular-expression-matching/

var Test = require('../Common/Test');

var isMatch = function (s, p) {
    let accepted = new Set();
    let i = -1;
    do {
        accepted.add(i);
    } while (p[i += 2] == '*');

    let iter = s[Symbol.iterator]();
    let next = iter.next();
    while (!next.done && accepted.size) {
        const accepted2 = [];
        const char = next.value;
        for (const index of accepted) {
            if (p[index] == '*') {
                const pattern = p[index - 1];
                if (pattern == '.' || pattern == char) {
                    accepted2.push(index);
                }
            }
            const pattern = p[index + 1];
            if (pattern == '.' || pattern == char) {
                accepted2.push(index + 1);
            }
        }
        accepted = new Set(accepted2);
        for (let index of accepted2) {
            while (!accepted.has(index += 2) && p[index] == '*') {
                accepted.add(index);
            }
        }
        next = iter.next();
    }
    return next.done && accepted.has(p.length - 1);
};

function test(s, p) {
    Test.test(isMatch, s, p);
}

// test("aa", "a");
// test("aa", "a*");
// test("ab", ".*");
// test("aab", "c*a*b");
// test("mississippi", "mis*is*p*.");
// test("mississppi", "mis*is*p*.");
// test("mississi", "mis*is*p*.");
test("mississpppppppppppppppppi", "mis*is*p*.");
test("a", "ab*");
test("aaa", "ab*a*c*a");

// function testSpeed() {

//     console.time();
//     let set;
//     for (let i = 0; i < 10000000; i++) {
//         // const s = new Set([1,2,3]);
//         const s = new Set();
//         s.add(1);
//         s.add(2);
//         s.add(3);
//         set = s;
//     }
//     console.timeEnd();
//     console.time();
//     // set;
//     for (let i = 0; i < 10000000; i++) {
//         set.clear();
//         set.add(1);
//         set.add(2);
//         set.add(3);
//     }
//     console.timeEnd();

//     console.time();
//     let array = [];
//     for (let i = 0; i < 10000000; i++) {
//         const a = [];
//         a.push(1);
//         a.push(1);
//         a.push(1);
//         array = a;
//     }
//     console.timeEnd();
// }

// testSpeed();