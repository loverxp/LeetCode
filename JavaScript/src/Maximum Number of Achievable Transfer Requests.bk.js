// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
var Test = require('./Common/Test');

var maximumRequests = function (n, requests) {
    let count = requests.length;
    const graph = Array.from({ length: n }, () => []);
    const degrees = Array.from({ length: n }, () => [0, 0]);
    for (const [from, to] of requests) {
        if (from != to) {
            graph[from].push(to);
            degrees[from][0]++;
            degrees[to][1]++;
        }
    }

    console.log({ graph });
    console.log({ degrees });
    // return;

    for (let i = 0; i < n; i++) {
        const degree = degrees[i];
        let diff = degree[0] - degree[1];
        if (diff > 0) {
            // degree[0] -= diff;
            let steps = 0;
            let states = new Set([i]);
            // while (states.size && diff > 0) {
            while (diff > 0) {
                console.log();
                console.log({ i });
                console.log({ steps, diff });
                console.log({ states });
                console.log({ degrees });
                console.log({ nexts: graph[i] });
                console.log({ count });
                steps++;
                const states2 = new Set();
                for (const i of states) {
                    for (const j of graph[i]) {
                        const degree2 = degrees[j];
                        console.log({ degree2 });
                        if (degree2[0] < degree2[1]) {
                            count -= steps;
                            degree[0]--;
                            degree2[1]--;
                            diff--;
                        }
                        else {
                            states2.add(j);
                        }
                    }
                }
                states = states2;
            }
        }
    }
    return count;
};

function run(n, requests) {
    Test.run(maximumRequests, n, requests);
}

// run(5, [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]);
// run(3, [[0, 0], [1, 2], [2, 1]])
// run(4, [[0, 3], [3, 1], [1, 2], [2, 0]])
// run(3, [[0, 0], [1, 1], [0, 0], [2, 0], [2, 2], [1, 1], [2, 1], [0, 1], [0, 1]]);


// run(3, [[0, 1], [2, 0], [2, 1]]);
// run(3, [[0, 1], [0, 1], [2, 0], [2, 1]]);

// run(4, [[0, 1], [0, 2], [1, 3], [2, 3]])


// run(5, [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]]);

run(5, [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]])

// 3
// run(6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [4, 5]])

// run(3, [[0, 1], [0, 2], [1, 2]])
// 2
// run(3, [[0, 1], [0, 2], [1, 2], [2, 1]])
// 3
// run(3, [[0, 1], [1, 2], [2, 0], [0, 2]])

// { graph: [ [ 1 ], [ 2, 3 ], [ 4 ], [ 4 ], [] ] }
// { degrees: [ [ 1, 0 ], [ 2, 1 ], [ 1, 1 ], [ 1, 1 ], [ 0, 2 ] ] }
// { states: Set {} }
// { degrees: [ [ -1, 0 ], [ 2, 1 ], [ 1, 1 ], [ 1, 1 ], [ 0, 0 ] ] }
// { nexts: [ 2, 3 ] }