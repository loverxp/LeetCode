// https://leetcode-cn.com/problems/sum-of-distances-in-tree/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var sumOfDistancesInTree = function (n, edges) {
    return;
    // const distances = Array(n)
    const distances = Array(n).fill(0).map(_ => Array(n).fill(Infinity));
    // distances.forEach((a, i) => a[i] = 0);
    // return ;
    return distances;

    const graph = Array(n).fill().map(_ => []);
    for (const [n1, n2] of edges) {
        addSide(n1, n2);
    }

    console.log(graph);
    // console.log(distances);
    Matrix.logMatrixInArray(distances);


    for (let i = 0; i < n; i++) {
        const env = [];
        // const stack = [[i, []]];
        const stack = [[i, env]];
        while (stack.length > 0) {
            const [node, env] = stack[stack.length - 1];
            for (const adjacent of graph[node]) {
                
            }
        }

    }



    return distances.map(a => a.reduce((a, b) => a + b));

    function addSide(n1, n2) {
        graph[n1] = n2;
        graph[n2] = n1;
        distances[n1][n2] = 1;
        distances[n2][n1] = 1;
    }
};


function test(n, edges) {
    Test.test(sumOfDistancesInTree, n, edges);
}

// test(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);
test(10000);