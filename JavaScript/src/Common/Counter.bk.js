
 class Counter {
    constructor(param) {
        if (param != undefined && param instanceof Counter) {
            this.counter = new Map(param.counter);
        }
        else {
            this.counter = new Map(param);
        }

        // this.allowNegative = false;
    }

    [Symbol.iterator]() {
        return this.counter.entries();
    }

    set(key) {
        this.counter.set(key);
    }

    get(key) {
        return this.counter.get(key);
    }

    inc(key, count) {
        count = undefined != count ? count : 1;
        if (!this.counter.has(key)) {
            this.counter.set(key, count);
        }
        else {
            this.counter.set(key, this.counter.get(key) + count);
        }
    }

    dec(key) {
        const count = this.counter.get(key);
        if (count > 1) {
            this.counter.set(key, count - 1);
        }
        else {
            this.counter.delete(key);
        }
    }
}

exports.Counter = Counter;