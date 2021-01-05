// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('./Common/Test');

// Test.isLogOn = false;

function log(...args) {
    // console.log(...args);
}

var kSimilarity = function (A, B) {
    const n = A.length;
    return run();

    function run() {
        const charIndexAt = (i) => B.charCodeAt(i) - 97;
        let states = [initState()];
        // return 0;
        for (let i = 0; i < n; i++) {
            // log();
            // log("states:", states);
            const charIndexB = charIndexAt(i);
            // log({ charIndexB });
            const states2 = [];

            // let minSteps = Infinity;

            for (const state of states) {
                let [similar, candidates, step] = state;
                if (similar & (1 << i)) {
                    // if (step + 1 < minSteps + n - i - 1) {
                    // minSteps = Math.min(minSteps, step + 1);
                    similar ^= (1 << i);
                    const charIndexA = candidates.findIndex(candidate => candidate & (1 << i));
                    const candidate = candidates[charIndexB];
                    // log({ candidate, charIndexA });
                    for (let j = 0; j < n; j++) {
                        if (candidate & (1 << j)) {
                            // log({ j, candidate }, candidate.toString(2));
                            // log(charIndexAt(j), charIndexA);
                            const candidates2 = candidates.slice();
                            candidates2[charIndexB] ^= (1 << j);
                            if (charIndexAt(j) == charIndexA) {
                                // log("case 1");
                                candidates2[charIndexA] ^= (1 << i);
                                states2.push([similar ^ (1 << j), candidates2, step + 1]);
                            }
                            else {
                                // log("case 2");
                                candidates2[charIndexA] ^= (1 << j);
                                states2.push([similar, candidates2, step + 1]);
                            }
                        }
                    }
                    // }
                }
                else {
                    // minSteps = Math.min(minSteps, step);
                    states2.push(state);
                }
            }
            states = states2;
        }
        // return 0;
        // return states;
        // return Math.min(...states.map(state => state[2]));
        return states.reduce((minSteps, state) => Math.min(minSteps, state[2]), Infinity);
        // return states.map(state => state[2]);
    }

    function initState() {
        const charIndex = (i) => A.charCodeAt(i) - 97;
        const candidates = Array(6).fill(0);
        let similar = 0;
        for (let i = 0; i < n; i++) {
            if (A[i] != B[i]) {
                candidates[charIndex(i)] |= 1 << i;
                similar |= 1 << i;
            }
        }
        return [similar, candidates, 0];
    }
};

function run(A, B) {
    Test.run((kSimilarity), A, B);
}

run("ab", "ba")
// run("abc", "bca")
// run("abac", "baca")
// run("aabc", "abca")
// run("cdebcdeadedaaaebfbcf", "baaddacfedebefdabecc");
run("cdebceaddaaefbcf", "baaddcfedefabecc");

// run("abdbc", "bdcab")
