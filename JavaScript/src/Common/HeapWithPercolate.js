class HeapWithPercolate {
    constructor(compare, array) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
        this.map = new Map();
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        if (this.tree.length == 1) {
            this.tree.push(val);
            this.map.set(val, 1);
        }
        else {
            const last = this.tree.length;
            let i = last, p = Math.trunc(i / 2);
            while (i > 1 && this.compare(val, this.tree[p])) {
                const val2 = this.tree[p];
                this.tree[i] = val2;

                this.map.set(val2, i)

                i = p;
                p = Math.trunc(i / 2);
            }
            this.tree[i] = val;
            this.map.set(val, i);
        }
        this.length++;
    }

    top() {
        return this.tree[1];
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        this.map.delete(top);

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
                    this.map.set(lval, i);
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    this.map.set(rval, i);
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
            this.map.set(last, i);
        }
        return top;
    }

    changeDown(val) {
        let i = this.map.get(val);
        let li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            const lval = this.tree[li], rval = this.tree[ri];
            if (!this.compare(lval, val) && (rval == undefined || !this.compare(rval, val))) {
                break;
            }
            else {
                if (rval == undefined || this.compare(lval, rval)) {
                    this.tree[i] = lval;
                    this.map.set(lval, i);
                    i = li;
                }
                else {
                    this.tree[i] = rval;
                    this.map.set(rval, i);
                    i = ri;
                }
                li = i * 2, ri = li + 1;
            }
        }
        this.tree[i] = val;
        this.map.set(val, i);
    }

    isEmpty() {
        return this.length == 0;
    }

    update(i, val) {
        this.tree[i] = val;
        this.map.set(val, i);
    }
}

exports.HeapWithPercolate = HeapWithPercolate;