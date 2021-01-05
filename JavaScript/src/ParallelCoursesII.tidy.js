// https://leetcode-cn.com/problems/parallel-courses-ii/
var Test = require('./Common/Test');

class Heap {
    constructor(compare) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
        this.set = new Set();
    }

    push(val) {
        if (!this.set.has(val)) {
            this.set.add(val);
            if (this.tree.length == 1) {
                this.tree.push(val);
            }
            else {
                const last = this.tree.length;
                let i = last, p = Math.trunc(i / 2);
                while (i > 1 && this.compare(val, this.tree[p])) {
                    this.tree[i] = this.tree[p];
                    i = p;
                    p = Math.trunc(i / 2);
                }
                this.tree[i] = val;
            }
            this.length++;
        }
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        this.set.delete(top);
        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (this.compare(last, lval) && (rval == undefined || this.compare(last, rval))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
        }
        return top;
    }
}

var minNumberOfSemesters = function (n, dependencies, k) {
    const childrens = Array.from({ length: n + 1 }, () => new Set());
    const parents = Array.from({ length: n + 1 }, () => new Set());
    const inGraphs = Array.from({ length: n + 1 }, () => false);
    for (const [i, j] of dependencies) {
        childrens[i].add(j);
        parents[j].add(i);
        inGraphs[i] = true;
        inGraphs[j] = true;
    }
    let freeNodes = n - inGraphs.filter(a => a).length;
    const minSemesters = calcMinSemesters();

    const heap = new Heap((a, b) => minSemesters[a] > minSemesters[b]);
    for (let i = 0; i < n + 1; i++) {
        if (inGraphs[i] && !childrens[i].size) {
            heap.push(i);
        }
    }

    let count = 0;
    while (heap.length) {
        const nexts = new Set();
        count++;
        for (let i = 0; i < k; i++) {
            if (heap.length) {
                const node = heap.pop();
                for (const parent of parents[node]) {
                    const siblings = childrens[parent];
                    siblings.delete(node);
                    if (!siblings.size) {
                        nexts.add(parent);
                    }
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
        for (let i = 0; i < n + 1; i++) {
            if (inGraphs[i] && !parents[i].size) {
                roots.add(i);
            }
        }
        const minSemesters = Array.from({ length: n + 1 }, () => 1);
        let nodes = roots;
        while (nodes.size) {
            const nodes2 = new Set();
            for (const node of nodes) {
                const minSemester = minSemesters[node] + 1;
                for (const child of childrens[node]) {
                    minSemesters[child] = Math.max(minSemesters[child], minSemester);
                    nodes2.add(child);
                }
            }
            nodes = nodes2;
        }
        return minSemesters;
    }
};

function run(n, dependencies, k) {
    Test.run(minNumberOfSemesters, n, dependencies, k);
}

// test(4, [[2, 1], [3, 1], [1, 4]], 2);
// test(5, [[2, 1], [3, 1], [4, 1], [1, 5]], 2)
// test(11, [], 2);
// test(5, [[2, 1], [3, 4]], 2);
// run(12, [[1, 2], [1, 3], [7, 5], [7, 6], [4, 8], [8, 9], [9, 10], [10, 11], [11, 12]], 2);
run(9, [[2, 4], [2, 5], [1, 6], [3, 6], [6, 7], [8, 9], [3, 7]], 3)

// run(4, [[1, 3], [2, 3], [2, 4], [3, 4]], 2);
// run(4, [[1, 3], [2, 3], [2, 4], [3, 4]], 3);