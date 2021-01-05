// https://leetcode-cn.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/
var Test = require('../Common/Test');

var minFlips = function (mat) {
    const [m, n] = [mat.length, mat[0].length];

    // return bfs(parseInt(mat.flat().join('')));
    return bfs(parseInt(mat.flat().reverse().join(''), 2));

    function bfs(code) {
        if (code == 0) return 0;

        const visited = new Set([code]);
        // let states = new Set([code, 0]);
        let states = [[code, 0]];
        for (let i = 0; i < m * n; i++) {
            console.log();
            console.log({ i });
            console.log({ states });
            const states2 = [];
            for (const [code, changed] of states) {
                for (let j = 0; j < m * n; j++) {
                    if (changed ^ (1 << j)) {
                        const code2 = flip(code, j);
                        if (code2 == 0) return i + 1;
                        if (!visited.has(code2)) {
                            visited.add(code2);
                            states2.push([code2, changed ^ (1 << j)]);
                        }
                    }
                }
            }
            states = states2;
        }
        return -1;
    }

    function flip(code, i) {
        const [x, y] = [i % n, Math.trunc(i / n)];
        code ^= (1 << i);
        if (x > 0) code ^= (1 << (i - 1));
        if (y > 0) code ^= (1 << (i - n));
        if (x < n - 1) code ^= (1 << (i + 1));
        if (y < m - 1) code ^= (1 << (i + n));
        return code;
    }
};

function run(mat) {
    Test.run(minFlips, mat);
}

run([[0, 0], [0, 1]])
run([[0]])
run([[1, 1, 1], [1, 0, 1], [0, 0, 0]])
run([[1, 0, 0], [1, 0, 0]])
