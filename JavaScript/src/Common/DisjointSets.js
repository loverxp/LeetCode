class DisjointSets {
    constructor(n) {
        this.sets = Array(n).fill();
    }

    union(x1, x2) {
        if (this.find(x1) != this.find(x2)) {
            this.sets[x2] = x1;
            return true;
        }
        return false;
    }

    find(x) {
        let root = x;
        while (undefined != this.sets[root]) {
            root = this.sets[root];
        }
        if (root != x) this.sets[x] = root;
        return root;
    }
}

exports.DisjointSets = DisjointSets;