// https://leetcode-cn.com/problems/shortest-path-visiting-all-nodes/
var Test = require('../Common/Test');
var { Matrix } = require('../Common/Matrix');

var shortestPathLength = function (graph) {
    // const maxSize = 12;
    const n = graph.length;
    const distances = Array.from({ length: n }, () => Array.from({ length: n }, () => Infinity));
    for (let i = 0; i < n; i++) {
        distances[i][i] = 0;
    }

    for (let i = 0; i < graph.length; i++) {
        Test.log();
        Test.log();
        Test.log({ i });
        const distances2 = Array(graph.length).fill(Infinity);
        distances2[i] = 0;
        let nexts = graph[i];
        let distance = 1;
        while (nexts.length) {
            // Test.log();
            Test.log({ nexts });
            const nexts2 = [];
            for (const next of nexts) {
                // if (distance < distances[i][next]) {
                // distances[i][next] = distance;
                // distances[next][i] = distance;
                // nexts2.push(next);
                // }
                if (distance < distances2[next]) {
                    distances2[next] = distance;
                    nexts2.push(next);
                }
            }
            nexts = nexts2;
            distance++;
        }
        Test.log({ distances2 });
        for (let j = 0; j < distances2.length; j++) {
            if (distances2[j] < distances[i][j]) {
                distances[i][j] = distances2[j];
                distances[j][i] = distances2[j];
            }
        }
    }
    return distances;
};

function run(graph) {
    Test.run(shortestPathLength, graph);
}

run([[1, 2, 3], [0], [0], [0]]);
run([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]);