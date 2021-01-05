class Heap {
    constructor(compare, array) {
        this.compare = compare;
        this.tree = [0];
        this.length = 0;
        if (array) {
            for (const val of array) {
                this.push(val);
            }
        }
    }

    push(val) {
        // console.log();
        // console.log("push:", { val });
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

    top() {
        return this.tree[1];
    }

    pop() {
        this.length--;
        const top = this.tree[1];
        // const most = this.compare(1, 2) ? Infinity : -Infinity;
        const last = this.tree[this.tree.length - 1];
        let i = 1, li = i * 2, ri = li + 1;
        while (li < this.tree.length) {
            // const lval = this.tree[li], rval = ri < this.tree.length ? this.tree[ri] : most;
            const lval = this.tree[li], rval = this.tree[ri];
            // if (this.compare(last, lval) && this.compare(last, rval)) {
            if (this.compare(last, lval) && (rval == undefined || this.compare(last, rval))) {
                break;
            }
            else {
                // if (this.compare(lval, rval)) {
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
        // console.log(this.tree);
        // const last = this.tree.pop();
        this.tree.pop();
        if (i != this.tree.length) {
            this.tree[i] = last;
        }
        return top;
    }

    isEmpty() {
        return this.length == 0;
    }
}

exports.Heap = Heap;