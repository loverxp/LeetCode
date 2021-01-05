
// Array.prototype.first = () => this[0];
// Array.prototype.last = () => this[this.length - 1];
Array.prototype.top = function () {
    return this[this.length - 1];
}

Array.prototype.sum = function () {
    let value = 0;
    for (const num of object) {
        value += num;
    }
    return value;
}

Array.random = function (n, max) {
    return Array.from({ length: n }, () => Math.trunc(Math.random() * max));
}