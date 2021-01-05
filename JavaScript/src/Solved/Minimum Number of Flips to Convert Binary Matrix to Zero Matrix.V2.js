// https://leetcode-cn.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/
var Test = require('./Common/Test');

var minFlips = function (mat) {
    const [m, n] = [mat.length, mat[0].length];
    // return bfs(parseInt(mat.flat().reverse().join(''), 2));
    return bfs(parseInt(mat.flat().join(''), 2));

    function bfs(code) {
        if (code == 0) return 0;
        let states = [[code, 0]];
        for (let i = 0; i < m * n; i++) {
            for (let j = 0; j < 1 << i; j++) {
                const [code, steps] = states[j];
                const code2 = flip(code, i);
                if (code2 == 0) return steps + 1;
                states.push([code2, steps + 1]);
            }
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
