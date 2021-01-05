// https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
var Test = require('./Common/Test');
var { DisjointSets } = require('./Common/DisjointSets');

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
        console.log();
        console.log(disjointSets);
        console.log({ u, v });
        const set1 = disjointSets.find(u);
        const set2 = disjointSets.find(v);
        if (set1 != set2) {
            disjointSets.union(set1, set2);
            accepted.push(index);
            weights += w;
            count++;
        }
    }
    console.log();
    console.log({ accepted });
    console.log(disjointSets);
    // return weights;

    console.log();
    // const criticals = [];
    const criticals = new Set();
    const nonCriticals = new Set();
    // const msts = [accepted];
    for (const index of accepted) {
        console.log();
        const disjointSets = new DisjointSets(n);
        // const accepted2 = [];
        let weights2 = 0;
        let i = 0;
        let count = 0;
        while (count < n - 1 && i < indices.length) {
            // const index = indices[i++];
            const index2 = indices[i++];
            if (index != index2) {
                // const [u, v] = edges[i++];
                const [u, v, w] = edges[index2];
                // console.log();
                // console.log(disjointSets);
                // console.log({ u, v });
                const set1 = disjointSets.find(u);
                const set2 = disjointSets.find(v);
                if (set1 != set2) {
                    disjointSets.union(set1, set2);
                    // accepted2.push(index2);
                    weights2 += w;
                    count++;
                }
            }
        }
        // console.log(disjointSets);
        if (weights2 > weights) {
            // criticals.push(index);
            criticals.add(index);
        }
        else {
            // else if (weights2 == weights) {
            // msts.push(accepted2);
            nonCriticals.add(index);
        }
    }

    console.log({ criticals });
    console.log({ nonCriticals });

    // return msts;
    // const criticalSet = new Set(criticals);

    for (let i = 0; i < indices.length; i++) {
        const index = indices[i];
        console.log();
        console.log({ i });
        if (!criticals.has(index) && !nonCriticals.has(index)) {
            console.log({ index });
            const accepted = [];
            const disjointSets = new DisjointSets(n);
            // let edges2 = [edges[index],]
            const indices2 = [index, ...indices];
            let weights2 = 0;
            let i = 0;
            let count = 0;
            while (count < n - 1) {
                const index = indices2[i++];
                const [u, v, w] = edges[index];
                console.log();
                console.log(disjointSets);
                console.log({ u, v });
                const set1 = disjointSets.find(u);
                const set2 = disjointSets.find(v);
                if (set1 != set2) {
                    disjointSets.union(set1, set2);
                    accepted.push(index);
                    weights2 += w;
                    count++;
                }
            }
            if (weights2 == weights) {
                nonCriticals.add(index);
            }
        }
        // if (!criticalSet.has(index)) {
        //     for (const mst of msts) {
        //         const set = new Set(mst);
        //         if (set.has(index)) {
        //             nonCriticals.add(index);
        //         }
        //         else {
        //             set.add(index);

        //         }
        //     }
        // }
    }


    // for (const index of accepted) {
    //     console.log();
    //     const disjointSets = new DisjointSets(n);
    //     let weights2 = 0;
    //     let i = 0;
    //     let count = 0;
    //     while (count < n - 1 && i < indices.length) {
    //         // const index = indices[i++];
    //         const index2 = indices[i++];
    //         if (index != index2) {
    //             // const [u, v] = edges[i++];
    //             const [u, v, w] = edges[index2];
    //             // console.log();
    //             // console.log(disjointSets);
    //             // console.log({ u, v });
    //             const set1 = disjointSets.find(u);
    //             const set2 = disjointSets.find(v);
    //             if (set1 != set2) {
    //                 disjointSets.union(set1, set2);
    //                 weights2 += w;
    //                 count++;
    //             }
    //         }
    //     }
    //     // console.log(disjointSets);
    //     if (weights2 == weights){
    //         nonCriticals.push(index);
    //     }
    // }


    // return disjointSets;
    // return selected;
    // return weights;
    // return criticals;
    return [criticals, nonCriticals];

};

function run(n, edges) {
    Test.run(findCriticalAndPseudoCriticalEdges, n, edges);
}

run(5, [[0, 1, 1], [1, 2, 1], [2, 3, 2], [0, 3, 2], [0, 4, 3], [3, 4, 3], [1, 4, 6]])
// run(4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]])
// run(4, [[0, 1, 2], [1, 2, 1], [2, 3, 3], [0, 3, 4]])