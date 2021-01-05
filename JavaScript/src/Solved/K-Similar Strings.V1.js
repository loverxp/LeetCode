// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('./Common/Test');

Test.isLogOn = false;

var kSimilarity = function (A, B) {
    const n = A.length;
    let states = [[A.split(""), 0]];
    for (let i = 0; i < n; i++) {
        const states2 = [];
        for (const state of states) {
            const [arr, step] = state;
            if (B[i] == arr[i]) {
                states2.push(state);
            }
            else {
                for (let j = i + 1; j < n; j++) {
                    if (B[i] == arr[j]) {
                        const arr2 = arr.slice();
                        arr2[j] = arr[i];
                        states2.push([arr2, step + 1]);
                    }
                }
            }
        }
        states = states2;
    }
    return states.reduce((minSteps, state) => Math.min(minSteps, state[1]), Infinity);
};

function run(A, B) {
    Test.run((kSimilarity), A, B);
}

// run("ab", "ba")
// run("abc", "bca")
// run("abac", "baca")
// run("aabc", "abca")


// run("abdbc", "bdcab")
// run("cdebcdeadedaaaebfbcf", "baaddacfedebefdabecc");
run("cdebceaddaaefbcf", "baaddcfedefabecc");