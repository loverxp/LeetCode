// https://leetcode-cn.com/problems/frog-position-after-t-seconds/
var Test = require('./Common/Test');

var frogPosition = function (n, edges, t, target) {
    const vertices = Array(n + 1).fill().map(_ => new Set());

    // console.log({ vertices });
    for (const [from, to] of edges) {
        vertices[from].add(to);
        vertices[to].add(from);
    }


    // const probabilities = Array(n + 1).fill(0);
    /*
    const probabilities = Array(n + 1).fill(1);
    const layer = [1];
    // let probability = 1;
    // let time = t;
    while (layer.length) {
        const nextLayer = [];
        // const i = layer.shift();

        for (const i of layer) {
            if (i == target) {
                
            }
            const children = vertices[i];
            // probability /= 
            // const probability = probabilities[]
            for (const child of vertices[i]) {
                vertices[child].delete(i);
                nextLayer.push(child);
            }
        }
        t--;
        layer = nextLayer;
    }
    */

    // console.log({ vertices });

    // return vertices;
    // return children;
    return dfs(1, 1, t);


    function dfs(vertex, probability, t) {
        // console.log({ vertex, probability, t });
        if (vertex == target) {
            return probability;
        }
        else {
            if (t == 0) {
                return 0;
            }
            else {
                const children = vertices[vertex];
                if (!children.size) {
                    return 0;
                }
                else {
                    probability /= children.size;
                    for (const child of children) {
                        const val = dfs(child, probability, t - 1);
                        if (val) return val;
                    }
                    return 0;
                }
            }
        }
    }
};

function test(n, edges, t, target) {
    Test.test(frogPosition, n, edges, t, target);
}

test(7, [[1, 2], [1, 3], [1, 7], [2, 4], [2, 6], [3, 5]], 2, 4);
test(7, [[1, 2], [1, 3], [7, 1], [2, 4], [6, 2], [3, 5]], 2, 4);

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