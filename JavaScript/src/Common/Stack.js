class Stack extends Array {
    // constructor(compare, ...args) {
    //     super(...args);
    //     this.compare = compare;
    // }

    top() {
        return this[this.length - 1];
    }
}

exports.Stack = Stack;