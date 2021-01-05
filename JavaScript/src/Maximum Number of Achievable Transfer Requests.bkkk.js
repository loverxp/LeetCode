// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
var Test = require('./Common/Test');

const log = console.log;
// const log = () => { };

var maximumRequests = function (n, requests) {
    let count = requests.length;
    const graph = Array.from({ length: n }, () => new Map());
    const degrees = Array.from({ length: n }, () => [0, 0]);
    for (const [from, to] of requests) {
        if (from != to) {
            const node = graph[from];
            if (!node.has(to)) {
                node.set(to, 1);
            }
            else {
                node.set(to, node.get(to) + 1);
            }

            degrees[from][0]++;
            degrees[to][1]++;
        }
    }

    log({ graph });
    log({ degrees });

    for (let i = 0; i < n; i++) {
        // log()
        log("****************************************")
        log({ i })
        log({ count })
        log({ degrees })
        log("----------")
        const degree = degrees[i];
        let diff = degree[0] - degree[1];
        if (diff > 0) {
            try {
                let steps = 0;
                let states = new Set([i]);
                const exists = Array(n).fill(false);
                exists[i] = true;
                const parents = [];
                while (diff > 0) {
                    log();
                    log({ states })
                    steps++;
                    const states2 = new Set();
                    for (const i of states) {
                        for (const [j,] of graph[i]) {
                            log("~~~~~")
                            log({ i, j, count })
                            log({ degrees })
                            log({ parents })
                            if (!exists[j]) {
                                parents[j] = i;
                                // }
                                const degree2 = degrees[j];
                                if (degree2[0] < degree2[1]) {
                                    // parents[j] = i;
                                    count -= steps;
                                    let k = j;
                                    do {
                                        // log()
                                        log({ k })
                                        const p = parents[k];
                                        degrees[k][1]--;
                                        degrees[p][0]--;
                                        if (graph[p].get(k) == 1) {
                                            graph[p].delete(k);
                                        }
                                        else {
                                            graph[p].set(k, graph[p].get(k) - 1);
                                        }
                                        k = p;
                                    } while (undefined != parents[k]);
                                    parents[j] = undefined;
                                    if (--diff == 0) throw "";
                                }
                                else {
                                    // if (!exists[j]) {
                                    exists[j] = true;
                                    states2.add(j);
                                    // parents[j] = i;
                                }
                            }
                        }
                    }
                    states = states2;
                }
            } catch (e) {

            }
        }
    }
    return count;
};

function run(n, requests) {
    Test.run(maximumRequests, n, requests);
}

// 5
// run(5, [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]);
// 3
// run(3, [[0, 0], [1, 2], [2, 1]])
// 4
// run(4, [[0, 3], [3, 1], [1, 2], [2, 0]])

// 5
// run(3, [[0, 0], [1, 1], [0, 0], [2, 0], [2, 2], [1, 1], [2, 1], [0, 1], [0, 1]]);

// 0
// run(3, [[0, 1], [2, 0], [2, 1]]);
// 0
// run(3, [[0, 1], [0, 1], [2, 0], [2, 1]]);
// 0
// run(4, [[0, 1], [0, 2], [1, 3], [2, 3]])
// 0
// run(5, [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]]);

// 3
// run(6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 2], [4, 5]])

// run(3, [[0, 1], [0, 2], [1, 2]])
// 2
// run(3, [[0, 1], [0, 2], [1, 2], [2, 1]])
// 3
// run(3, [[0, 1], [1, 2], [2, 0], [0, 2]])

// 0
// run(5, [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]])
// 2
// run(4, [[0, 1], [1, 2], [2, 1], [2, 3]])
// 0
// run(5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]])

// 0
// run(5, [[0, 1], [1, 2], [1, 2], [1, 3], [2, 4], [3, 4]])
// 2
run(5, [[0, 1], [1, 2], [2, 1], [1, 3], [2, 4], [3, 4]])
// 0
// run(5, [[0, 1], [1, 2], [1, 4], [1, 3], [2, 4], [3, 4]])
// 2
// run(4, [[0, 1], [1, 2], [2, 1], [2, 3]])
// 0
// run(8, [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 7], [6, 7]])

// 5
// [[0, 1], [1, 0], [0, 1], [1, 2], [2, 0], [3, 4]]
// 5
// [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]]
// 4
// [[0, 1], [1, 2], [2, 1], [2, 3]]
// 5
// [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]
// 3
// [[0, 1], [2, 0], [2, 1]]
// 3
// [[0, 1], [0, 1], [2, 0], [2, 1]]
// 4
// [[0, 1], [0, 2], [1, 3], [2, 3]]
// 5
// [[0, 1], [1, 2], [0, 3], [3, 4], [4, 2]]


// 5
// [[0, 1], [1, 2], [1, 2], [1, 3], [2, 4], [3, 4]]
// 5
// [[0, 1], [1, 2], [2, 1], [1, 3], [2, 4], [3, 4]]
// 5
// [[0, 1], [1, 2], [1, 4], [1, 3], [2, 4], [3, 4]]
// 4
// [[0, 1], [1, 2], [2, 1], [2, 3]]
// 8
// [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [5, 7], [6, 7]]