// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
var Test = require('./Common/Test');

var maximumRequests = function (n, requests) {
    const size = requests.length;
    let max = 0;
    for (let mask = 1; mask < 2 ** size; mask++) {
        let count = 0;
        let even = Array(n).fill(0);
        for (let i = 0; i < size; i++) {
            if (mask & (1 << i)) {
                count++;
                const [from, to] = requests[i];
                even[from]++;
                even[to]--;
            }
        }
        if (even.every(num => num == 0)) {
            max = Math.max(max, count);
        }
    }
    return max;
}

function run(n, requests) {
    Test.run(maximumRequests, n, requests);
}

// run(3, [[1, 2], [1, 2], [2, 2], [0, 2], [2, 1], [1, 1], [1, 2]])

// 3
// run(3, [[0, 1], [1, 2], [2, 0], [0, 2]])
// 3
// run(4, [[0, 1], [1, 2], [2, 0], [0, 2], [3, 0]])
// 2
// run(5, [[0, 1], [1, 2], [2, 1], [1, 3], [2, 4], [3, 4]])
// 5
run(5, [[0, 1], [1, 2], [2, 1], [1, 3], [4, 2], [3, 4]])
