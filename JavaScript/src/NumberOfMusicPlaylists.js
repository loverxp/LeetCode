// https://leetcode-cn.com/problems/number-of-music-playlists/
var Test = require('./Common/Test');
const { functions, get } = require('lodash');

var numMusicPlaylists = function (n, l, k) {
    let fact = 1
    for (let i = 0; i < n; i++) {
        fact *= i + 1;
    }
    // return fact * (n ** ((l - n) * 2));
    return fact * (n ** (l - n));
};


function run(n, l, k) {
    Test.run(numMusicPlaylists, n, l, k);
}

function showValue(value) {
    console.log(value);
}

function getV(v) {
    return v;
}

function bindFun(fun, n) {
    console.log(fun);
    console.log(n);
    return fun(n)
}

function assert(target, n, l, k) {
    // Test.assert(target, numMusicPlaylists.bind(this, n, l, k));
    // Test.assert(target, Test.run.bind(this, numMusicPlaylists, n, l, k));
    // const fun = Test.run.bind(this, numMusicPlaylists, n, l, k);

    // Test.run(numMusicPlaylists, n, l, k);
    // const fun = Test.run.bind(Test, numMusicPlaylists, n, l, k);
    // const v = fun();
    // console.log(v);

    Test.run.bind(Test, numMusicPlaylists, n, l, k)();

    // showValue.bind(undefined,10)();
    // Test.assert(10, getV.bind(undefined, 5));
    // Test.assert(10, bindFun.bind(undefined, getV, 5));
    // Test.assert(10, bindFun.bind(undefined, getV, 10));
}

function runs() {
    run(3, 3, 1);
    run(2, 3, 0);
    run(2, 3, 1);
}

function asserts() {
    // assert(150, 3, 5, 0);
    assert(50, 3, 5, 0);
    // assert(2, 3, 0);
    // assert(2, 3, 1);
}

// runs();
asserts();



function testCall() {
    // return getV.call();
    const val = getV.call(undefined, 10);
    const fun = getV.call;
    console.log(fun);
    console.log(val);

    const fun2 = getV.bind(undefined, 10);
    console.log(fun2());

    // console.log(fun()); //??

    // console.log(fun.bind(getV));

    // console.log(getV.call);
    // Test.run(getV.call);
}

// function run() {
// Test.run(testCall);
// }


// testCall();