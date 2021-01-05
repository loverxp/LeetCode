// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('../Common/Test');

var kSimilarity = function (A, B) {
    const n = A.length;
    // let { similar, positions } = prepare();

    // const charIndexInA = (i) => A.charCodeAt(i) - 97;
    const charIndexAt = (i) => B.charCodeAt(i) - 97;

    // const states = Array.from({ length: n }, () => []);
    // states[0] = [[0, similar, positions, 0]];
    // states[0].push([similar, positions, 0]);

    // let states = [[similar, positions, 0]];
    let states = [initState()];
    // return similar;
    // return positions;
    // let states = [[0, similar, positions]];
    // let states = [[0, similar, positions, 0]];
    // while (states.length) {
    // }
    for (let i = 0; i < n; i++) {
        // for (const [charIndex, similar, positions, step] of states) {
        // for (const [index, similar, positions, step] of states[i]) {
        // const ib = charIndexInB(i);
        // const charIndex = B.charCodeAt(i) - 97;
        const charIndex = charIndexAt(i);

        const states2 = [];
        // for (const [similar, positions, step] of states) {
        for (const state of states) {
            let [similar, candidates, step] = state;
            if (similar & (1 << i)) {
                similar ^= (1 << i);
                // const ia = charIndexInA(i);

                const charIndex2 = candidates.findIndex(candidate => candidate ^ (1 << i));
                const candidate = candidates[charIndex];

                for (let j = 0; j < n; j++) {
                    if (candidate & (1 << j)) {
                        // const state = [similar ^ (1 << i), candidates, step + 1];

                        const candidates2 = candidates.slice();
                        candidates2[charIndex] ^= (1 << j);
                        if (charIndexAt(j) == charIndex2) {
                            candidates2[charIndex2] ^= (1 << i);
                            const state = [similar ^ (1 << j), candidates2, step + 1];
                            // const state = [similar ^ (1 << i), candidates2, step + 1];
                            states2.push(state);
                        }
                        else {
                            // const candidates2 = candidates.slice();
                            // candidates2[charIndex] ^ (1 << j);
                            candidates2[charIndex2] ^= (1 << j);

                            const state = [similar, candidates2, step + 1];
                            // const state = [similar ^ (1 << i), candidates2, step + 1];
                            states2.push(state);
                        }
                    }
                }
            }
            else {
                states2.push(state);
            }
        }
        states = states2;
    }
    return states;

    function initState() {
        const charIndex = (i) => A.charCodeAt(i) - 97;
        // const charIndex = charIndexInA;
        const candidates = Array(6).fill(0);
        let similar = 0;

        for (let i = 0; i < n; i++) {
            if (A[i] != B[i]) {
                candidates[charIndex(i)] |= 1 << i;
                similar |= 1 << i;
            }
        }
        // return { similar, positions };
        return [similar, candidates, 0];
    }
};

function run(A, B) {
    Test.run((kSimilarity), A, B);
}

run("ab", "ba")
run("abc", "bca")
run("abac", "baca")
run("aabc", "abca")

run("abdbc", "bdcab")