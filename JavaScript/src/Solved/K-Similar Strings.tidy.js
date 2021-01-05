// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('./Common/Test');


function log(...args) {
    // console.log(...args);
}

var kSimilarity = function (A, B) {
    let source = "", target = "";
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            source += A[i];
            target += B[i];
        }
    }
    const n = source.length;
    let states = new Map();
    states.set(source, 0);
    for (let i = 0; i < n; i++) {
        const states2 = new Map();
        const updateStates = (str, step) => {
            if (!states2.has(str) || step < states2.get(str)) {
                states2.set(str, step);
            }
        };

        for (const [str, step] of states) {
            if (target[i] == str[0]) {
                updateStates(str.slice(1), step);
            }
            else {
                const n = str.length;
                for (let j = 1; j < n; j++) {
                    if (target[i] == str[j]) {
                        const arr2 = str.slice(1).split('');
                        arr2[j - 1] = str[0];
                        updateStates(arr2.join(''), step + 1);
                    }
                }
            }
        }
        states = states2;
    }
    return [...states].reduce((minSteps, state) => Math.min(minSteps, state[1]), Infinity);
};

function run(A, B) {
    Test.run((kSimilarity), A, B);
}

// run("ab", "ba")
// run("abc", "bca")
// run("abac", "baca")
// run("aabc", "abca")

run("cdebcdeadedaaaebfbcf", "baaddacfedebefdabecc");
run("cdebceaddaaefbcf", "baaddcfedefabecc");

run("abdbc", "bdcab")