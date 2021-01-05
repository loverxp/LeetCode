// https://leetcode-cn.com/problems/sum-of-distances-in-tree/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var sumOfDistancesInTree = function (n, edges) {
    // const distances = Array(n)
    const distances = Array(n).fill().map(_ => Array(n).fill(Infinity));
    // const distances = Array(n).fill().map(_ => Array(n).fill(0));
    distances.forEach((a, i) => a[i] = 0);
    // const distances = [];
    // for (let i = 0; i < n; i++) {
    //     distances[i] = [];
    //     for (let j = 0; j < n; j++) {
    //         // distances[i].push(i == j ? 0 : Infinity);
    //         distances[i].push(Infinity);
    //     }
    // }
    // Matrix.logMatrixInArray(distances);
    // return;

    const graph = Array(n).fill().map(_ => []);
    for (const [n1, n2] of edges) {
        graph[n1] = n2;
        graph[n2] = n1;
        // addSide(n1, n2);
    }

    console.log(graph);
    // console.log(distances);
    Matrix.logMatrixInArray(distances);


    for (let i = 0; i < n; i++) {
        const env = [];
        // const stack = [[i, []]];
        // const stack = [[i, env]];
        const stack = [[i, 0]];
        while (stack.length > 0) {
            const stackLength = stack.length;
            const [node, env] = stack[stackLength- 1];
            for (const adjacent of graph[node]) {

            }
            if (stackLength == stack.length) {
                stack.pop();
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

test(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);
// test(10000);