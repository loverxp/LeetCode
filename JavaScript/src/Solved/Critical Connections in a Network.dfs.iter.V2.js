// https://leetcode-cn.com/problems/critical-connections-in-a-network/
var Test = require('./Common/Test');


var criticalConnections = function (n, connections) {
    const neighbours = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        neighbours[a].push(b);
        neighbours[b].push(a);
    }
    const visited = Array(n).fill(false);
    visited[0] = true;
    const prevs = Array.from({ length: n }, () => new Set());
    const stack = [[0, 0]];
    while (stack.length) {
        const [node, i] = top = stack[stack.length - 1];
        if (i < neighbours[node].length) {
            const neighbour = neighbours[node][i];
            if (!visited[neighbour]) {
                prevs[neighbour].add(node);
                stack.push([neighbour, 0]);
                visited[neighbour] = true;
            }
            top[1]++;
        }
        else {
            visited[node] = false;
            stack.pop();
        }
    }
    const result = [];
    for (let i = 0; i < prevs.length; i++) {
        if (prevs[i].size == 1) {
            result.push([prevs[i].values().next().value, i]);
        }
    }
    return result;
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

// run(6, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);

testWithTestcase(107740354);