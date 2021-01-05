// https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

// Test.isLogOn = false;

var shortestPathLength = function (graph) {
    const n = graph.length;
    const distances = calcDistances();
    Matrix.logMatrixInArray(distances);
    // return distances;
    return findShortestPath();


    function findShortestPath() {
        // let mask = 0;
        // for (let i = 0; i < n; i++) {
        //     mask |= 1 << i;
        // }
        // Test.log({ mask });

        const showMask = (mask) => {
            const arr = [];
            for (let i = 0; i < n; i++) {
                // arr.push(mask & (1 << i) ? true : false);
                // arr.push(mask & (1 << i));
            }
            Test.log("mask:", arr);
        };
        // return dfs(0, 0, 0);
        // return dfs(0, 0, 1);

        // const memo = Array(2 << n).fill();
        const dp = Array.from({ length: 1 << n }, () => Array.from({ length: n }, () => Infinity));

        let count = 0;

        let min = Infinity;
        for (let i = 0; i < n; i++) {
            min = Math.min(min, dfs(i, 0, 1 << i));
        }
        console.log({ count });
        return min;

        function dfs(i, sum, mask) {
            // if (visited == mask) {
            count++;
            if ((1 << n) - 1 == mask) {
                // console.log();
                // console.log({ sum });
                return sum;
            }
            else {
                // if (true) {
                if (sum < dp[mask][i]) {
                    dp[mask][i] = sum;

                    let min = Infinity;
                    for (let j = 0; j < n; j++) {
                        if (i != j && !(mask & (1 << j))) {
                            console.log();
                            console.log({ i, j, sum, mask });
                            // showMask(visited);
                            min = Math.min(min, dfs(j, sum + distances[i][j], mask | (1 << j)));
                        }
                    }
                    return min;
                }
                return Infinity;
            }
        }
    }

    function calcDistances() {

        const distances = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
        for (let i = 0; i < n; i++) {
            distances[i][i] = 0;
        }

        for (let i = 0; i < n; i++) {
            // Test.log();
            // Test.log();
            // Test.log({ i });
            const distances2 = Array(n).fill(Infinity);
            distances2[i] = 0;
            let nodes = new Set([i]);
            let distance = 1;
            while (nodes.size) {
                // Test.log();
                // Test.log(nodes)
                // Test.log({ distances2 });
                const nodes2 = new Set();
                for (const node of nodes) {
                    // Test.log({ node });
                    for (const next of graph[node]) {
                        // Test.log({ next });
                        if (distance < distances2[next]) {
                            distances2[next] = distance;
                            nodes2.add(next);
                        }
                    }
                }
                nodes = nodes2;
                distance++;
            }
            // Test.log({ distances2 });
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