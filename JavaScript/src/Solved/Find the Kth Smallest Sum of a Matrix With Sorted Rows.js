// https://leetcode-cn.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/
var Test = require('../Common/Test');
var { Heap } = require('../Common/Heap');

var kthSmallest = function (mat, k) {
    const [m, n] = [mat.length, mat[0].length];

    const map = new Map();
    const heap = new Heap((a, b) => map.get(a) < map.get(b));

    const coords = JSON.stringify(Array(m).fill(0));
    map.set(coords, mat.reduce((a, b) => a + b[0], 0));
    heap.push(coords);

    for (let i = 0; i < Math.min(k, n ** m) - 1; i++) {
        const prevCoords = heap.pop();
        for (let j = 0; j < m; j++) {
            let coords = JSON.parse(prevCoords);
            if (++coords[j] < n) {
                const key = JSON.stringify(coords);
                if (!map.has(key)) {
                    const sum = map.get(prevCoords) + mat[j][coords[j]] - mat[j][coords[j] - 1];
                    map.set(key, sum);
                    heap.push(key);
                }
            }
        }
    }
    return map.get(heap.top());
};

function run(mat, k) {
    Test.run(kthSmallest, mat, k);
}

run([[1, 3, 11], [2, 4, 6]], 5)
run([[1, 3, 11], [2, 4, 6]], 9)
run([[1, 10, 10], [1, 4, 5], [2, 3, 6]], 7)
run([[1, 1, 10], [2, 2, 9]], 7)