// https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isLogOn = false;

var shortestPathLength = function (graph) {
    const n = graph.length;
    const distances = calcDistances();
    Matrix.logMatrixInArray(distances);
    return findShortestPath();


    function findShortestPath() {
        const dp = Array.from({ length: 1 << n }, () => Array.from({ length: n }, () => Infinity));

        // let masks = [];
        let masks = new Map();
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    const mask = (1 << i) | (1 << j);
                    dp[mask][j] = distances[i][j];
                    // masks.push(mask);
                    //TODO:
                }
            }
        }

        for (const mask of masks) {
            for (let i = 0; i < n; i++) {
                
            }
        }

    }

    function calcDistances() {
        const distances = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
        for (let i = 0; i < n; i++) {
            distances[i][i] = 0;
        }
        for (let i = 0; i < n; i++) {
            const distances2 = Array(n).fill(Infinity);
            distances2[i] = 0;
            let nodes = new Set([i]);
            let distance = 1;
            while (nodes.size) {
                const nodes2 = new Set();
                for (const node of nodes) {
                    for (const next of graph[node]) {
                        if (distance < distances2[next]) {
                            distances2[next] = distance;
                            nodes2.add(next);
                        }
                    }
                }
                nodes = nodes2;
                distance++;
            }
            for (let j = 0; j < distances2.length; j++) {
                if (distances2[j] < distances[i][j]) {
                    distances[i][j] = distances2[j];
                    distances[j][i] = distances2[j];
                }
            }
        }
        return distances;
    }
};

function run(graph) {
    Test.run(shortestPathLength, graph);
}

// run([[1, 2, 3], [0], [0], [0]]);
run([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]);