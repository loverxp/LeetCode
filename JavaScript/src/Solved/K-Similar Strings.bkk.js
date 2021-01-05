// https://leetcode-cn.com/problems/k-similar-strings/
var Test = require('./Common/Test');

Test.isLogOn = false;

var kSimilarity = function (A, B) {
    const n = A.length;
    console.log({ n });
    let states = [[A.split(""), 0]];
    for (let i = 0; i < n; i++) {
        Test.log();
        Test.log({ i });
        Test.log({ states });
        // const charIndex = B.charCodeAt(i) - 97;
        const states2 = [];
        // for (const [str, step] of states) {

        let minSteps = Infinity;
        for (const state of states) {
            Test.log({ state });
            const [arr, step] = state;
            if (B[i] == arr[i]) {
                // if (B[i] == str[0]) {
                minSteps = Math.min(minSteps, step);
                states2.push(state);
            }
            else {
                if (true) {
                    // if (step + 1 < minSteps + n - i - 1) {
                    minSteps = Math.min(minSteps, step + 1);
                    for (let j = i + 1; j < n; j++) {
                        // for (let j = 1; j < n; j++) {
                        Test.log();
                        Test.log({ j });
                        if (B[i] == arr[j]) {
                            Test.log({ j });
                            // const str2 = str.slice(i + 1);
                            // const str2 = str.slice(1);
                            const arr2 = arr.slice();
                            Test.log({ arr2 });
                            // arr2[j - i - 1] = arr[i];
                            arr2[j] = arr[i];
                            Test.log({ arr2 });
                            // str2[j - 1] = str[0];
                            // const state = [arr2, step + 1];
                            // states2.push(state);
                            states2.push([arr2, step + 1]);
                        }
                    }
                }
            }
        }
        states = states2;
    }
    Test.log({ states });
    // console.log({ states });
    return states;
    // return Math.min(...states.map(state => state[1]));
    // return states.reduce((minSteps, state) => Math.min(minSteps, state[1]), Infinity);
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