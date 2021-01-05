// https://leetcode-cn.com/problems/count-all-possible-routes/
var Test = require('./Common/Test');
// var { Heap } = require('./Common/Heap');
class Heap {
    constructor(compare) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
    }

    push(val) {
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

    pop() {
        this.length--;
        const top = this.tree[1];
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

var countRoutes = function (locations, start, finish, fuel) {
    const mod = 1e9 + 7;
    const n = locations.length;
    const dp = Array.from({ length: n }, () => Array.from({ length: fuel + 1 }, () => 0));
    dp[start][fuel] = 1;

    const heap = new Heap(([, fuel1], [, fuel2]) => fuel1 > fuel2);
    heap.push([start, fuel]);

    const exists = Array.from({ length: n }, () => new Set());

    while (heap.length) {
        const [i, fuel] = heap.pop();
        for (let j = 0; j < n; j++) {
            if (i != j) {
                const dist = Math.abs(locations[i] - locations[j]);
                if (fuel >= dist) {
                    const remainFuel = fuel - dist;
                    dp[j][remainFuel] += dp[i][fuel];
                    dp[j][remainFuel] %= mod;
                    if (!exists[j].has(remainFuel)) {
                        exists[j].add(remainFuel);
                        heap.push([j, remainFuel]);
                    }
                }
            }
        }
    }
    return dp[finish].reduce((a, b) => a + b) % mod;
};

function run(locations, start, finish, fuel) {
    Test.run(countRoutes, locations, start, finish, fuel);
}

run([2, 3, 6, 8, 4], 1, 3, 5)
run([4, 3, 1], 1, 0, 6)
run([5, 2, 1], 0, 2, 3)
run([2, 1, 5], 0, 0, 3)
run([1, 2, 3], 0, 2, 40)
