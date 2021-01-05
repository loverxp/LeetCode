// https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
var Test = require('./Common/Test');
// var { DisjointSets } = require('./Common/DisjointSets');

class DisjointSets {
    constructor(n) {
        this.sets = Array(n).fill();
    }

    union(x1, x2) {
        this.sets[x2] = x1;
    }

    find(x) {
        let root = x;
        while (undefined != this.sets[root]) {
            root = this.sets[root];
        }
        return root;
    }
}

var findCriticalAndPseudoCriticalEdges = function (n, edges) {
    const indices = [...edges.keys()].sort((i, j) => edges[i][2] - edges[j][2]);

    const accepted = [];
    const disjointSets = new DisjointSets(n);
    let weights = 0;
    let i = 0;
    let count = 0;
    while (count < n - 1) {
        const index = indices[i++];
        const [u, v, w] = edges[index];
        const set1 = disjointSets.find(u);
        const set2 = disjointSets.find(v);
        if (set1 != set2) {
            disjointSets.union(set1, set2);
            accepted.push(index);
            weights += w;
            count++;
        }
    }
    console.log(disjointSets);
    console.log({ accepted });

    const criticals = new Set();
    const nonCriticals = new Set();
    for (const index of accepted) {
        const disjointSets = new DisjointSets(n);
        let weights2 = 0;
        let i = 0;
        let count = 0;
        while (count < n - 1 && i < indices.length) {
            const index2 = indices[i++];
            if (index != index2) {
                const [u, v, w] = edges[index2];
                const set1 = disjointSets.find(u);
                const set2 = disjointSets.find(v);
                if (set1 != set2) {
                    disjointSets.union(set1, set2);
                    weights2 += w;
                    count++;
                }
            }
        }
        // if (weights2 > weights) {
        if (weights2 != weights) {
            criticals.add(index);
        }
        else {
            nonCriticals.add(index);
        }
    }

    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        if (!criticals.has(index) && !nonCriticals.has(index)) {
            // const accepted = [];
            const disjointSets = new DisjointSets(n);
            const indices2 = [index, ...indices];
            let weights2 = 0;
            let i = 0;
            let count = 0;
            while (count < n - 1) {
                const index = indices2[i++];
                const [u, v, w] = edges[index];
                const set1 = disjointSets.find(u);
                const set2 = disjointSets.find(v);
                if (set1 != set2) {
                    disjointSets.union(set1, set2);
                    // accepted.push(index);
                    weights2 += w;
                    count++;
                }
            }
            if (weights2 == weights) {
                nonCriticals.add(index);
            }
        }
    }
    return [[...criticals], [...nonCriticals]];

    function kruskal(index, indices) {
        const disjointSets = new DisjointSets(n);
        let weights2 = 0;
        let i = 0;
        let count = 0;
        while (count < n - 1 && i < indices.length) {
            const index2 = indices[i++];
            if (index != index2) {
                const [u, v, w] = edges[index2];
                const set1 = disjointSets.find(u);
                const set2 = disjointSets.find(v);
                if (set1 != set2) {
                    disjointSets.union(set1, set2);
                    weights2 += w;
                    count++;
                }
            }
        }
        return weights2;
    }
};

function run(n, edges) {
    Test.run(findCriticalAndPseudoCriticalEdges, n, edges);
}

// run(5, [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]])
// run(4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]])
// run(4, [[0, 1, 2], [1, 2, 1], [2, 3, 3], [0, 3, 4]])
run(6, [[0, 1, 1], [1, 2, 1], [0, 2, 1], [2, 3, 4], [3, 4, 2], [3, 5, 2], [4, 5, 2]])