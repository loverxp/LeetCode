// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('./Common/Test');

// Test.isLogOn = false;

function log(...args) {
    // console.log(...args);
}

var kSimilarity = function (A, B) {
    // let source = A, target = B;
    let source = "", target = "";
    for (let i = 0; i < A.length; i++) {
        if (A[i] != B[i]) {
            source += A[i];
            target += B[i];
        }
    }
    // return { A, B }

    const n = source.length;
    console.log({ n });
    // let states = [[A.split(""), 0]];
    let states = new Map();
    // states.set(0, A.split(""));
    states.set(source, 0);

    // [[A.split(""), 0]];
    for (let i = 0; i < n; i++) {
        log();
        log({ i });
        log({ states });
        // const charIndex = B.charCodeAt(i) - 97;
        // const states2 = [];
        const states2 = new Map();
        // const updateStates = (str, step) => !states2.has(str) || step < states2.get(str) ? states2.set(str, step) : 0;
        const updateStates = (str, step) => {
            if (!states2.has(str) || step < states2.get(str)) {
                states2.set(str, step);
            }
        };

        let minSteps = Infinity;
        // for (const state of states) {
        for (const [str, step] of states) {
            log();
            log({ str, step });
            // log({ state });
            // const [arr, step] = state;
            // if (target[i] == str[i]) {
            if (target[i] == str[0]) {
                // if (B[i] == str[0]) {
                minSteps = Math.min(minSteps, step);
                // states2.push(state);
                // states2.set(str, step);
                // updateStates(str, step);
                updateStates(str.slice(1), step);
            }
            else {
                const n = str.length;
                if (true) {
                    // if (step + 1 < minSteps + n - i - 1) {
                    // if (step + 1 < minSteps + n - 1) {
                    minSteps = Math.min(minSteps, step + 1);
                    // for (let j = i + 1; j < n; j++) {
                    for (let j = 1; j < n; j++) {
                        if (target[i] == str[j]) {
                            log();
                            log({ j });
                            // log({ j });
                            // const str2 = str.slice(i + 1);
                            // const str2 = str.slice(1);
                            // const arr2 = str.slice();
                            // const arr2 = str.split('');
                            const arr2 = str.slice(1).split('');
                            log({ arr2 });
                            // arr2[j - i - 1] = arr[i];
                            arr2[j - 1] = str[0];
                            // arr2[j] = str[i];
                            log({ arr2 });
                            // str2[j - 1] = str[0];
                            // const state = [arr2, step + 1];
                            // states2.push(state);
                            // states2.push([arr2, step + 1]);
                            // states2.set(arr2.join(''), step + 1);
                            updateStates(arr2.join(''), step + 1);
                        }
                    }
                }
            }
        }
        states = states2;
    }
    log({ states });
    // console.log({ states });
    return states;
    // return Math.min(...states.map(state => state[1]));
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
// run("cdebceaddaaefbcf", "baaddcfedefabecc");

// run("abdbc", "bdcab")