// https://leetcode-cn.com/problems/frog-position-after-t-seconds/
var Test = require('../Common/Test');

var frogPosition = function (n, edges, t, target) {
    const vertices = Array(n + 1).fill().map(_ => new Set());
    for (const [from, to] of edges) {
        vertices[from].add(to);
        vertices[to].add(from);
    }
    return dfs(1, 0, 1, t);

    function dfs(vertex, parent, probability, t) {
        const children = vertices[vertex];
        children.delete(parent);
        const hasChildren = children.size > 0;
        const isTimeUp = t-- == 0;
        const isTarget = vertex == target;
        if (!isTimeUp && hasChildren && !isTarget) {
            probability /= children.size;
            for (const child of children) {
                const val = dfs(child, vertex, probability, t);
                if (val) return val;
            }
            return 0;
        }
        else {
            // return isTarget && (isTimeUp || !hasChildren) ? probability : 0;
            return (isTimeUp || !hasChildren) && isTarget ? probability : 0;
        }
    }
};

function test(n, edges, t, target) {
    Test.test(frogPosition, n, edges, t, target);
}

test(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 2, 4);
test(7, [[1, 2], [1, 3], [7, 1], [2, 4], [6, 2], [3, 5]], 2, 4);
test(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 1, 7);
test(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 20, 6);
test(8, [[2, 1], [3, 2], [4, 1], [5, 1], [6, 4], [7, 1], [8, 7]], 7, 7);

// 1
// []
// 0
// 1
// 7
// [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]]
// 1
// 4
// 7
// [[1,2],[1,3],[7,1],[2,4],[6,2],[3,5]]
// 2
// 4

