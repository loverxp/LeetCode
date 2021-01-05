// https://leetcode-cn.com/problems/redundant-connection-ii/
var Test = require('../Common/Test');

var findRedundantDirectedConnection = function (edges) {
    const parents = [];
    const sideIndexes = [];
    let multiParents, multiParentsIndex;

    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        if (!parents[v]) {
            parents[v] = u;
            sideIndexes[v] = i;
        }
        else {
            if (!multiParents) {
                multiParents = [parents[v]];
                multiParentsIndex = v;
            }
            multiParents.push(u);
        }
    }

    if (multiParents) {
        for (const parent of multiParents) {
            let node = parent;
            do {
                node = parents[node];
            } while (node != undefined && node != multiParentsIndex);
            if (node == multiParentsIndex) return [parent, multiParentsIndex];
        }
        return [multiParents.pop(), multiParentsIndex];
    }
    else {
        const accessed = new Set();
        for (let i = 1; i < parents.length; i++) {
            if (!accessed.has(i)) {
                let sideIndex = sideIndexes[i];
                let node = i;
                do {
                    accessed.add(node);
                    node = parents[node];
                    sideIndex = Math.max(sideIndex, sideIndexes[node]);
                } while (node != undefined && node != i);
                if (node == i) return edges[sideIndex];
            }
        }
    }
};

function test(edges) {
    Test.test(findRedundantDirectedConnection, edges);
}

// test([[1, 2], [1, 3], [2, 3]]);
test([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]);
// test([[2, 1], [3, 1], [4, 2], [1, 4]]);