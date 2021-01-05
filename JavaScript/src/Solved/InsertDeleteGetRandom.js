// https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
var RandomizedCollection = function () {
    this.array = [];
    this.map = {};
};

RandomizedCollection.prototype.insert = function (val) {
    if (!(val in this.map)) {
        this.map[val] = new Set();
    }
    this.array.push(val);
    this.map[val].add(this.array.length - 1);
    return this.map[val].size == 1;
};

RandomizedCollection.prototype.remove = function (val) {
    if (val in this.map && this.map[val].size > 0) {
        const index = this.map[val].values().next().value;
        this.map[val].delete(index);
        if (index == this.array.length - 1) {
            this.array.pop();
        }
        else {
            const lastIndex = this.array.length - 1;
            const lastValue = this.array[lastIndex];
            this.array[index] = lastValue;
            this.array.pop();
            this.map[lastValue].delete(lastIndex);
            this.map[lastValue].add(index);
        }
        return true;
    }
    return false;
};

RandomizedCollection.prototype.getRandom = function () {
    const index = Math.trunc(Math.random() * this.array.length);
    return this.array[index];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

function test1() {
    var obj = new RandomizedCollection()
    var param_1 = obj.insert(val)
    var param_2 = obj.remove(val)
    var param_3 = obj.getRandom()
}

function testRandom() {
    for (let i = 0; i < 1000; i++) {
        const random = Math.trunc(Math.random() * 100);
        console.log(random);
    }
}

// testRandom();

function test1(ops, params) {
    const o = new RandomizedCollection(params[0][0]);
    for (let i = 1; i < ops.length; i++) {
        const op = ops[i];
        switch (op) {
            case "insert":
                console.log("insert:", params[i]);
                o.insert(...params[i]);
                break;
            case "remove":
                console.log("remove:", params[i][0]);
                o.remove(params[i][0]);
                break;
            case "getRandom":
                console.log("getRandom:");
                const v = o.getRandom();
                console.log({ v });
                break;
        }
        console.log(o);
    }
}


// test(["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"],
// [[], [1], [1], [2], [], [1], []]);

// test(["RandomizedCollection", "insert", "insert", "remove", "insert", "remove", "getRandom"],
// [[], [0], [1], [0], [2], [1], []]);

// test(["RandomizedCollection", "insert", "insert", "insert", "insert", "insert", "remove", "remove", "remove", "remove"],
// [[], [4], [3], [4], [2], [4], [4], [3], [4], [4]]);

test1(["RandomizedCollection", "insert", "insert", "insert", "insert", "insert", "insert", "remove", "remove", "remove", "remove", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"],
    [[], [10], [10], [20], [20], [30], [30], [10], [10], [30], [30], [], [], [], [], [], [], [], [], [], []]);

// ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
// [[], [1], [1], [2], [], [1], []]
// ["RandomizedCollection", "insert", "insert", "remove", "insert", "remove", "getRandom"]
// [[], [0], [1], [0], [2], [1], []]
// ["RandomizedCollection", "insert", "insert", "insert", "insert", "insert", "remove", "remove", "remove", "remove"]
// [[], [4], [3], [4], [2], [4], [4], [3], [4], [4]]
// ["RandomizedCollection", "insert", "insert", "insert", "insert", "insert", "insert", "remove", "remove", "remove", "remove", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
// [[], [10], [10], [20], [20], [30], [30], [10], [10], [30], [30], [], [], [], [], [], [], [], [], [], []]