// https://leetcode-cn.com/problems/all-oone-data-structure/
var AllOne = function () {
    this.valueMap = {};
    this.indexMap = {};
    this.array = [];
};

AllOne.prototype.inc = function (key) {
    if (this.valueMap[key] == undefined) {
        this.valueMap[key] = 1;
        this.array.push(key);
        this.indexMap[key] = this.array.length - 1;
    }
    else {
        this.valueMap[key]++;
        const value = this.valueMap[key];
        let i = this.indexMap[key];
        while (i > 0) {
            const key = this.array[i - 1];
            if (value > this.valueMap[key]) {
                this.array[i] = key;
                this.indexMap[key] = i;
            }
            else {
                break;
            }
            i--;
        }
        this.array[i] = key;
        this.indexMap[key] = i;
    }
};

AllOne.prototype.dec = function (key) {
    if (this.valueMap[key] != undefined) {
        if (--this.valueMap[key] == 0) {
            this.valueMap[key] = undefined;
            const index = this.indexMap[key];
            this.array.splice(index, 1);
            for (let i = index; i < this.array.length; i++) {
                const key = this.array[i];
                this.indexMap[key] = i;
            }
        }
        else {
            const value = this.valueMap[key];
            let i = this.indexMap[key];
            while (i < this.array.length - 1) {
                const key = this.array[i + 1];
                if (value < this.valueMap[key]) {
                    this.array[i] = key;
                    this.indexMap[key] = i;
                }
                else {
                    break;
                }
                i++
            }
            this.array[i] = key;
            this.indexMap[key] = i;
        }
    }
};

AllOne.prototype.getMaxKey = function () {
    return this.array[0] || "";
};

AllOne.prototype.getMinKey = function () {
    return this.array[this.array.length - 1] || "";
};

function test1(ops, keys) {
    const o = new AllOne();
    for (let i = 1; i < ops.length; i++) {
        const op = ops[i];
        switch (op) {
            case "inc":
                console.log("inc:", keys[i]);
                o.inc(keys[i]);
                break;
            case "dec":
                console.log("dec:", keys[i]);
                o.dec(keys[i]);
                break;
            case "getMinKey":
                console.log("Min:", o.getMinKey());
                break;
            case "getMaxKey":
                console.log("Max:", o.getMaxKey());
                break;
        }

    }
}

function test1() {
    const o = new AllOne();

    o.inc("b");
    o.inc("b");
    o.inc("b");
    o.inc("b");
    o.inc("a");
    o.inc("a");
    // o.inc("a");
    o.dec("a");
    o.dec("a");
    o.dec("b");
    o.dec("b");
    o.dec("b");
    console.log(o.getMaxKey());
    console.log(o.getMinKey());
}

function test2() {

    const o = new AllOne();
    o.inc("a");
    o.inc("b");
    o.inc("b");
    o.inc("c");
    o.inc("c");
    o.inc("c");
    o.dec("b");
    o.dec("b");
    console.log(o.getMinKey());
    o.dec("a");
    console.log(o.getMaxKey());
    console.log(o.getMinKey());
}
// test1();
test2();

// test(["AllOne", "inc", "inc", "inc", "inc", "inc", "inc", "dec", "dec", "getMinKey", "dec", "getMaxKey", "getMinKey"],
    // [[], ["a"], ["b"], ["b"], ["c"], ["c"], ["c"], ["b"], ["b"], [], ["a"], [], []]);
