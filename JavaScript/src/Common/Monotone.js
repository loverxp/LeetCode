class Monotone extends Array {
    constructor(compare, ...args) {
        super(...args);
        this.compare = compare;
        // this.pointer = 0;
    }

    push(...items) {
        for (const item of items) {
            while (this.length && this.compare(item, this[this.length - 1])) {
                this.pop();
            }
            super.push(item);
        }
        return this.length;
    }

    first() {
        return this[0];
    }

    last() {
        return this[this.length - 1];
    }
}

exports.Monotone = Monotone;