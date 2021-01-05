// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/
var Test = require('./Common/Test');

const log = console.log;
// const log = () => { };

var maximumRequests = function (n, requests) {
    let count = requests.length;
    const graph = Array.from({ length: n }, () => Array(n).fill(0));
    const reverseGraph = Array.from({ length: n }, () => Array(n).fill(0));
    const degrees = Array.from({ length: n }, () => [0, 0]);

    for (const [i, j] of requests) {
        if (i != j) {
            graph[i][j]++;
            reverseGraph[j][i]++;
            degrees[i][0]++;
            degrees[j][1]++;
        }
    }

    log({ graph });
    log({ reverseGraph });
    log({ degrees });

    const nodes = new Set([...Array(n).keys()]);
    for (let i = 0; i < n; i++) {
        const degree = degrees[i];
        if (degree[1] == 0) {
            count -= degree[0];
            degree[0] = 0;
            nodes.delete(i);
            let states = new Set([i]);
            while (states.size) {
                const states2 = new Set();
                for (const i of states) {
                    const nexts = graph[i];
                    for (let j = 0; j < n; j++) {
                        if (nexts[j] > 0) {
                            const degree2 = degrees[j];
                            degree2[1] -= nexts[j];
                            if (degree2[1] == 0) {
                                count -= degree2[0];
                                degree2[0] = 0;
                                states2.add(j);
                                nodes.delete(j);
                            }
                            nexts[j] = 0;
                            reverseGraph[j][i] = 0;
                        }
                    }
                }
                states = states2;
            }
        }
        if (degree[0] == 0) {
            count -= degree[1];
            degree[1] = 0;
            nodes.delete(i);
            let states = new Set([i]);
            while (states.size) {
                const states2 = new Set();
                for (const i of states) {
                    const prevs = reverseGraph[i];
                    for (let j = 0; j < n; j++) {
                        if (prevs[j] > 0) {
                            const degree2 = degrees[j];
                            degree2[0] -= prevs[j];
                            if (degree2[0] == 0) {
                                count -= degree2[1];
                                degree2[1] = 0;
                                states2.add(j);
                                nodes.delete(j);
                            }
                            prevs[j] = 0;
                            graph[j][i] = 0;
                        }
                    }
                }
                states = states2;
            }
        }
    }

    log({ graph });
    log({ reverseGraph });
    log({ degrees });
    log({ nodes })
    // return nodes;

    for (const i of nodes) {
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
                const prevs = [];
                while (diff > 0) {
                    log();
                    log({ states })
                    steps++;
                    const states2 = new Set();
                    for (const i of states) {
                        for (let j = 0; j < n; j++) {
                            if (graph[i][j]) {
                                log("~~~~~")
                                log({ i, j, count })
                                log({ degrees })
                                log({ parents: prevs })
                                // if (exists[j]) {

                                // }
                                // else {
                                if (!exists[j]) {
                                    prevs[j] = i;
                                    const degree2 = degrees[j];
                                    if (degree2[0] < degree2[1]) {
                                        // parents[j] = i;
                                        count -= steps;
                                        let k = j;
                                        do {
                                            // log()
                                            log({ k })
                                            const p = prevs[k];
                                            degrees[k][1]--;
                                            degrees[p][0]--;

                                            // if (graph[p].get(k) == 1) {
                                            //     graph[p].delete(k);
                                            // }
                                            // else {
                                            //     graph[p].set(k, graph[p].get(k) - 1);
                                            // }
                                            graph[p][k]--;
                                            k = p;
                                        } while (undefined != prevs[k]);
                                        prevs[j] = undefined;
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

run(3, [[1, 2], [1, 2], [2, 2], [0, 2], [2, 1], [1, 1], [1, 2]])

// 3
// run(3, [[0, 1], [1, 2], [2, 0], [0, 2]])
// 3
// run(4, [[0, 1], [1, 2], [2, 0], [0, 2], [3, 0]])
// 2
// run(5, [[0, 1], [1, 2], [2, 1], [1, 3], [2, 4], [3, 4]])
// 5
// run(5, [[0, 1], [1, 2], [2, 1], [1, 3], [4, 2], [3, 4]])
