// https://leetcode-cn.com/problems/sum-of-distances-in-tree/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var sumOfDistancesInTree = function (n, edges) {
    const tree = makeTree();
    // return tree;
    const descendants = countDescendants();
    return calcSums();

    function calcSums() {
        const sums = Array(n).fill(0);
        const descendant = descendants[0];
        sums[0] = descendant.dists;
        for (const i of tree[0]) {
            dfs(i, descendant.dists);
        }
        return sums;

        function dfs(i, dists) {
            const descendant = descendants[i];
            sums[i] = dists + n - 2 * descendant.count - 2;
            for (const j of tree[i]) {
                dfs(j, sums[i]);
            }
        }
    }

    function makeTree() {
        const graph = Array.from({ length: n }, () => []);
        for (const [s, t] of edges) {
            graph[s].push(t);
            graph[t].push(s);
        }
        const tree = Array.from({ length: n }, () => []);
        const visited = new Set([0]);
        let states = [0];
        while (states.length) {
            const states2 = [];
            for (const i of states) {
                for (const j of graph[i]) {
                    if (!visited.has(j)) {
                        visited.add(j);
                        states2.push(j);
                        tree[i].push(j);
                    }
                }
            }
            states = states2;
        }
        return tree;
    }

    function countDescendants() {
        const descendants = Array.from({ length: n }, () => { return { count: 0, dists: 0 } });
        dfs(0);
        return descendants;

        function dfs(i) {
            const children = tree[i];
            if (children.length) {
                const descendant = descendants[i];
                descendant.count += children.length;
                descendant.dists += children.length;
                for (const j of children) {
                    dfs(j);
                    descendant.count += descendants[j].count;
                    descendant.dists += descendants[j].dists + descendants[j].count;
                }
            }
        }
    }
};


function run(n, edges) {
    Test.run(sumOfDistancesInTree, n, edges);
}

run(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);
run(3, [[2, 1], [0, 2]])
run(2, [[1, 0]]);

// run(6, [[1, 0], [0, 2], [2, 3], [2, 4], [2, 5]]);
// run(10000);


// 6
// [[0,1],[0,2],[2,3],[2,4],[2,5]]
// 6
// [[1,0],[0,2],[2,3],[2,4],[2,5]]
// 6
// [[1,0],[0,2],[2,3],[2,4],[2,5],[1,2]]
// 6
// [[1,0],[1,2],[2,3],[2,4],[2,5]]
// 6
// [[1,0],[0,2],[1,2],[2,3],[2,4],[2,5],[1,2]]