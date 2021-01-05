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
    tarjan(0);
    return result;

    function tarjan(v, prev) {
        dfn[v] = low[v] = ++step;
        stack.push(v);
        inStack[v] = true;
        for (const w of neighbours[v]) {
            if (w != prev) {
                if (!dfn[w]) {
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

        if (dfn[v] == low[v]) {
            if (undefined != prev) result.push([prev, v]);
            do {
                v = stack.pop();
                inStack[v] = false;
            } while (dfn[v] != low[v]);
        }
    }
};

function run(n, connections) {
    Test.run(criticalConnections, n, connections);
}

function testWithTestcase(id) {
    Test.testWithTestcaseV2(criticalConnections, id);
}


// run(4, [[0, 1], [1, 2], [2, 0], [1, 3]]);
// run(7, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);
// run(4, [[0, 1], [1, 2], [2, 3]]);

// run(8, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6], [6, 3]]);

// run(6, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);

// testWithTestcase(107740354);