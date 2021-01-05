// https://leetcode-cn.com/problems/critical-connections-in-a-network/
var Test = require('../Common/Test');

var criticalConnections = function (n, connections) {
    const neighbours = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        neighbours[a].push(b);
        neighbours[b].push(a);
    }
    const visited = Array(n).fill(false);
    const prevs = Array.from({ length: n }, () => new Set());
    dfs(0);
    return prevs;

    function dfs(prev) {
        visited[prev] = true;
        for (const neighbour of neighbours[prev]) {
            if (!visited[neighbour]) {
                if (!prevs[neighbour].has(prev)) {
                    prevs[neighbour].add(prev);
                    dfs(neighbour);
                }
            }
        }
        visited[prev] = false;
    }
};

function run(n, connections) {
    Test.run(criticalConnections, n, connections);
}

run(4, [[0, 1], [1, 2], [2, 0], [1, 3]]);
run(7, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);
// run(6, [[0, 1], [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6]]);
run(4, [[0, 1], [1, 2], [2, 3]]);