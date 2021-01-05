
exports.SortedArray = class SortedArray {
    constructor(callback) {
        this.array = [];
        this.callback = callback;
    }

    insert(val) {
        // const i = this.array.findIndex(this.callback);
        // const i = this.array.findIndex((a) => a == 0);
        // this.array.splice(i == -1 ? this.array.length : i, 0, val);
    }

    remove(val) {
        // const i = this.array.findIndex(this.callback);
        const i = this.array.findIndex((a) => a == 0);
        if (i != -1) {
            this.array.splice(i, 1);
        }
    }

}