// https://leetcode-cn.com/problems/critical-connections-in-a-network/
var Test = require('./Common/Test');

var criticalConnections = function (n, connections) {
    const neighbours = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        neighbours[a].push(b);
        neighbours[b].push(a);
    }
    const result = [];
    const dfn = Array(n).fill(0);
    const low = Array(n).fill(0);
    const stack = [];
    const inStack = Array(n).fill(false);
    let step = 0;
    tarjan(0, -1);
    // return { dfn, low };
    console.log({ dfn, low });
    return;
    // return result;

    // function tarjan(v) {
    function tarjan(v, prev) {
        dfn[v] = low[v] = ++step;
        stack.push(v);
        inStack[v] = true;
        for (const w of neighbours[v]) {
            // if (inStack[w]) {
            //     low[v] = Math.min(low[v], dfn[w]);
            // }
            // else {
            //     tarjan(w);
            //     low[v] = Math.min(low[v], low[w]);
            // }
            if (w != prev) {
                if (!dfn[w]) {
                    // if (!inStack[w] && !dfn[w]) {
                    tarjan(w, v);
                    low[v] = Math.min(low[v], low[w]);
                }
                else {
                    if (inStack[w]) {
                        low[v] = Math.min(low[v], dfn[w]);
                    }
                }
            }
        }

        // console.log();
        // console.log({ v });
        // console.log({ dfn, low });
        if (dfn[v] == low[v]) {
            // for (const w of neighbours[v]) {
            // result.push([v, w]);
            // }
            do {
                v = stack.pop();
                // console.log("pop:", v);
                inStack[v] = false;
            } while (dfn[v] != low[v]);
        }
    }
};

function run(n, connections) {
    Test.run(criticalConnections, n, connections);
}

run(4, [[0, 1], [1, 2], [2, 0], [1, 3]]);
run(7, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);
// run(6, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);
run(4, [[0, 1], [1, 2], [2, 3]]);