exports.logArgs = true;
exports.logResult = true;

exports.test = function (fun, ...args) {
    // console.log("fun:",);
    console.log("test", fun);
    // console.log({ logArgs: this.logArgs });
    if (this.logArgs) {
        console.log("args:", args);
    }

    console.time();
    const result = fun(...args);
    if (this.logResult) {
        console.log("result:");
        console.log(result);
    }
    console.timeEnd();
    console.log("\n");
};

exports.repeatTest = function (times, fun, ...args) {
    console.time();
    while (--times > 0) {
        fun(...args);
    }
    console.timeEnd();
    console.log("\n");
}

exports.run = function (fun, ...args) {
    // console.log("fun:",);
    console.log("test", fun);
    // console.log({ logArgs: this.logArgs });
    if (this.logArgs) {
        console.log("args:", args);
    }

    console.time();
    const result = fun(...args);
    if (this.logResult) {
        console.log("result:");
        console.log(result);
    }
    console.timeEnd();
    console.log("\n");
    return result;
};

exports.repeatRun = function (times, fun, ...args) {
    console.time();
    while (--times > 0) {
        fun(...args);
    }
    console.timeEnd();
    console.log("\n");
}

exports.assert = function (value, fun) {
    console.log();
    console.log();
    // console.log(fun);
    const result = fun();
    if (value == result) {
        console.log(true);
    }
    else {
        console.error(false, `expected ${value}, but get ${result}`);
    }
}

exports.testWithTestcase = function (fun, id) {
    this.test(fun, ...this.testcase(id));
}

exports.testWithTestcaseV2 = async function (fun, id) {
    var fs = require('fs');
    const readline = require('readline');
    const fileStream = fs.createReadStream("Testcases/" + id, 'utf-8');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const lines = [];
    for await (const line of rl) {
        lines.push(eval(line));
    }
    this.run(fun, ...lines);
}

// exports.testWithInstructions = function (ops, params) {
// const obj = eval(`new ${ops[0]}(...params[0])`);
exports.testWithInstructions = function (clazz, ops, params) {
    console.log(clazz);
    console.log(ops);
    console.log(params);

    console.time();
    const obj = new clazz(...params[0]);
    console.log("constructed:", obj);

    // const obj = eval(`new ${ops[0]}(...params[0])`);
    // console.log(obj);

    for (let i = 1; i < ops.length; i++) {
        console.log(ops[i], ...params[i]);
        const result = obj[ops[i]].bind(obj)(...params[i]);
        if (result != undefined) {
            console.log("result:");
            console.log(result);
        }
        // console.log({ result });
        console.log();
    }
    console.timeEnd();
    console.log("\n");
};

exports.runWithInstructions = function (clazz, ops, params) {
    console.log(clazz);
    console.log(ops);
    console.log(params);

    console.time();
    const obj = new clazz(...params[0]);
    console.log("constructed:", obj);

    // const obj = eval(`new ${ops[0]}(...params[0])`);
    // console.log(obj);

    for (let i = 1; i < ops.length; i++) {
        console.log(ops[i], ...params[i]);
        const result = obj[ops[i]].bind(obj)(...params[i]);
        if (result != undefined) {
            console.log("result:");
            console.log(result);
        }
        // console.log({ result });
        console.log();
    }
    console.timeEnd();
    console.log("\n");
};

exports.loopTest = function (times, fun, ...args) {
    // console.log("fun:",);
    console.log("test", fun);
    console.log("args:", args);

    console.time();
    for (let i = 0; i < times; i++) {
        fun(...args);
    }
    // const result = fun(...args);
    // console.log("result:");
    // console.log(result);
    console.timeEnd();
    console.log("\n");
};

exports.Test = class {
    timeLabel = "time";
    // logArgs = true;
    // logResult = true;
    argsLogger;
    resultLogger;

    constructor(fun, ...args) {
        this.fun = fun;
        this.args = args;
        // this.logArgs = true;
        this.logArgs = false;
        this.logResult = true;
        // this.logResult = false;
    }

    do() {
        console.log("test", this.fun);
        if (this.logArgs) {
            console.log("args:");
            if (this.argsLogger) {
                this.argsLogger(this.args);
            }
            else {
                console.log(this.args);
            }
        }

        console.time(this.timeLabel);
        const result = this.fun(...this.args);
        if (this.logResult) {
            console.log("result:");
            if (this.resultLogger) {
                this.resultLogger(result);
            }
            else {
                console.log(result);
            }
        }
        console.timeEnd(this.timeLabel);
        console.log("\n");
    }
}

exports.compareStr = function (str1, str2) {
    let i;
    // for (i = 0; i < str1.length; i++) {
    for (i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] != str2[i]) {
            console.log("different from position " + i + ":");
            console.log("..." + str1.slice(i));
            console.log("..." + str2.slice(i));
            break
        }
    }
    if (i < str1.length) {
        console.log(str1.slice(i));
    }
    if (i < str2.length) {
        console.log(str2.slice(i));
    }
    console.log("comparing completed");
}


exports.isLogOn = true;
exports.log = function (...args) {
    if (this.isLogOn) {
        console.log(...args);
    }
}

exports.condLog = function (cond, ...args) {
    if (this.isLogOn && cond) {
        console.log(...args);
    }
}

exports.testcase = function (id) {
    var fs = require('fs');
    // var data = fs.readFileSync("Testcases/" + id, 'utf-8');
    var data = fs.readFileSync("../res/Testcases/" + id, 'utf-8');
    return eval(data);
}

exports.testcaseV2 = function (id) {
}
/*
exports.testcase = function (id) {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('file.in')
    });

    lineReader.on('line', function (line) {
        console.log('Line from file:', line);
    });
}
*/

exports.wrongOutput = function (id) {
    var fs = require('fs');
    var data = fs.readFileSync("WrongOutputs/" + id, 'utf-8');
    return eval(data);
}

exports.compareArray = function (arr1, arr2) {
    // for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] != arr2[i]) {
            console.log([i, arr1[i], arr2[i]]);
        }
    }
}