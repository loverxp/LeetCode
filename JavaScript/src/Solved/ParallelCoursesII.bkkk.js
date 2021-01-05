// https://leetcode-cn.com/problems/parallel-courses-ii/
var Test = require('./Common/Test');
var { Heap } = require('./Common/Heap');

var minNumberOfSemesters = function (n, dependencies, k) {

    // const childrens = Array.from({ length: n }, () => []);
    // const parents = Array.from({ length: n }, () => []);
    const childrens = Array.from({ length: n + 1 }, () => new Set());
    const parents = Array.from({ length: n + 1 }, () => new Set());
    const inGraphs = Array.from({ length: n + 1 }, () => false);
    // const inGraphs = new Set();
    for (const [i, j] of dependencies) {
        console.log({ i, j });
        // childrens[i].push(j);
        // parents[j].push(i);
        childrens[i].add(j);
        parents[j].add(i);
        inGraphs[i] = true;
        inGraphs[j] = true;
        // inGraphs.add(i);
        // inGraphs.add(j);
        // roots.add(i);
        // roots.delete(j);
    }



    // let freeNodes = n - inGraphs.size;
    let freeNodes = n - inGraphs.filter(a => a).length;
    // return freeNodes;
    const minSemesters = calcMinSemesters();

    // return minSemesters;

    // const roots = new Set();
    const heap = new Heap((a, b) => minSemesters[a] > minSemesters[b]);

    for (let i = 0; i < n + 1; i++) {
        if (inGraphs[i] && !childrens[i].size) {
            // roots.add(node);
            heap.push(i);
        }
    }
    // for (const node of inGraphs) {
    //     if (!childrens[node].size) {
    //         // roots.add(node);
    //         heap.push(node);
    //     }
    // }
    // console.log(heap);
    // return heap.top();

    let count = 0;
    while (heap.length) {
        console.log();
        console.log(heap);
        const nexts = new Set();
        count++;
        for (let i = 0; i < k; i++) {
            if (heap.length) {
                const node = heap.pop();
                // count++;
                for (const parent of parents[node]) {
                    nexts.add(parent);
                }
            }
            else {
                if (freeNodes) freeNodes--;
            }
        }
        for (const next of nexts) {
            heap.push(next);
        }
    }

    return count += Math.ceil(freeNodes / k);





    function calcMinSemesters() {

        const roots = new Set();
        // const roots = new Set();
        for (let i = 0; i < n + 1; i++) {
            if (inGraphs[i] && !parents[i].size) {
                roots.add(i);
            }
        }
        // for (const node of inGraphs) {
        //     if (!parents[node].size) {
        //         // if (!childrens[node].size) {
        //         roots.add(node);
        //     }
        // }
        // return roots;

        const minSemesters = Array.from({ length: n + 1 }, () => 1);
        let nodes = roots;
        while (nodes.size) {
            const nodes2 = new Set();
            for (const node of nodes) {
                const minSemester = minSemesters[node] + 1;
                // console.log("..");
                for (const child of childrens[node]) {
                    minSemesters[child] = Math.max(minSemesters[child], minSemester);
                    nodes2.add(child);
                }
            }
            nodes = nodes2;
        }

        return minSemesters;
    }


    // return { graph: childrens, nodesInGraph: inGraphs, freeNodes };




    // return graph;
    // const heap = new Heap();
    // const depedencyDepth = calcDependencyDepth();

    function calcDependencyDepth() {
        // const depedencyDepth = 
        const depedencyDepth = Array.from({ length: n }, () => 0);

        const visited = Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(0);
            }
        }

        function dfs(depth) {
            let maxDepth = 0;

        }
    }
};

function test(n, dependencies, k) {
    Test.test(minNumberOfSemesters, n, dependencies, k);
}

test(4, [[2, 1], [3, 1], [1, 4]], 2);
test(5, [[2, 1], [3, 1], [4, 1], [1, 5]], 2)
test(11, [], 2);
test(5, [[2, 1], [3, 4]], 2);