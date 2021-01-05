
class Counter extends Map {

    // inc(key, count) {
        // count = undefined != count ? count : 1;
        // if (!this.has(key)) {
        //     this.set(key, count);
        // }
        // else {
        //     this.set(key, this.get(key) + count);
        // }
    // }

    inc(key, count) {
        this.set(key, this.get(key) + undefined != count ? count : 1);
    }

    dec(key) {
        const count = this.get(key);
        if (count > 1) {
            this.set(key, count - 1);
        }
        else {
            this.delete(key);
        }
    }

    get(key) {
        return this.has(key) ? super.get(key) : 0;
    }
}

exports.Counter = Counter;