// https://leetcode-cn.com/problems/sum-of-distances-in-tree/
var Test = require('./Common/Test');
var { Matrix } = require('./Common/Matrix');

var sumOfDistancesInTree = function (n, edges) {
    const { tree, parents } = makeTree();
    const { childrenCount, distToAllChildren } = countChildren();


    console.log({ childrenCount });
    console.log({ distToAllChildren });

    return calcSums();

    function calcSums() {
        const sums = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            sums[i] = distToAllChildren[i];
            let parent = parents[i];
            while (undefined != parent) {
                // sums[i]
            }
        }
        return sums;
    }

    function makeTree() {
        const tree = Array.from({ length: n }, () => []);
        const parents = Array(n).fill();

        for (const edge of edges) {
            const [s, t] = edge.sort((a, b) => a - b);
            tree[s].push(t);
        }
        return { tree, parents }
    }

    function countChildren() {
        const childrenCount = Array(n).fill(0);
        const distToAllChildren = Array(n).fill(0);

        dfs(0);
        return { childrenCount, distToAllChildren };

        function dfs(i) {
            const node = tree[i];
            if (node.length) {
                childrenCount[i] += node.length;
                distToAllChildren[i] += node.length;
                for (const j of tree[i]) {
                    dfs(j);
                    childrenCount[i] += childrenCount[j];
                    distToAllChildren[i] += distToAllChildren[j] + childrenCount[j];
                }
            }
        }
    }

};


function test(n, edges) {
    Test.test(sumOfDistancesInTree, n, edges);
}

test(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]);
// test(6, [[1, 0], [0, 2], [2, 3], [2, 4], [2, 5]]);
// test(10000);