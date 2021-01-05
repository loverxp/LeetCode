// https://leetcode-cn.com/problems/maximum-frequency-stack/

var Utils = require('../Common/Utils');

var FreqStack = function () {
    this.maxFreq = 0;
    this.freqs = {};
    this.freqStatus = {};
};

FreqStack.prototype.push = function (x) {
    if (this.freqs[x] == undefined) {
        this.freqs[x] = 1;
    }
    else {
        this.freqs[x]++;
    }
    const freq = this.freqs[x];
    if (freq > this.maxFreq) {
        this.maxFreq = freq;
        this.freqStatus[freq] = [x];
    }
    else{
        this.freqStatus[freq].push(x);
    }
}

FreqStack.prototype.pop = function () {
    if (this.maxFreq > 0) {
        const top = this.freqStatus[this.maxFreq].pop();
        this.freqs[top]--;
        if (this.freqStatus[this.maxFreq].length == 0) this.maxFreq--;
        return top;
    }
    return undefined;
};

FreqStack.prototype.show = function () {
    console.log(this.maxFreq);
    console.log(this.freqs);
    console.log(this.freqStatus);
};

function test1() {
    var obj = new FreqStack();
    // console.log(obj.freqs);
    // console.log(obj.freqStatus);
    // console.log(obj.freqs[10]);
    // return;

    obj.show();

    obj.push(10);
    obj.push(5);
    obj.push(10);
    obj.push(2);
    obj.push(5);
    obj.push(5);
    obj.push(2);
    obj.push(5);
    obj.push(5);
    obj.push(10);
    obj.push(5);
    obj.push(5);
    obj.push(10);
    obj.push(5);
    obj.push(10);
    obj.push(2);

    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj.pop());
}

function test2() {
    var obj = new FreqStack();
    obj.push(5);
    obj.push(7);
    obj.push(5);
    obj.push(7);
    obj.push(4);
    obj.push(5);

    // console.log(obj.pop());
    // console.log(obj.pop());
    // console.log(obj.pop());
    // console.log(obj.pop());
    obj.pop();
    obj.pop();
    obj.pop();
    obj.pop();
    obj.show();
    //5,7,5,7,4,5
    //5,7,5,4
}

// test1();
// test2();
function test3() {
    var obj = new FreqStack();
    obj.show();
    obj.push(5);
    obj.show();
    obj.push(7);
    obj.show();
    obj.push(5);
    obj.show();
    obj.push(7);
    obj.show();
    obj.push(4);
    obj.show();
    obj.push(5);
    obj.show();

    obj.pop();
    obj.show();
    obj.pop();
    obj.show();
    obj.pop();
    obj.show();
    obj.pop();
    obj.show();
    obj.pop();
    obj.show();
    obj.pop();
    obj.show();
    obj.pop();
    obj.show();

    obj.pop();
    obj.show();
}
test1();
// test2();
// test3();