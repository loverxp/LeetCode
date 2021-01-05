// https://leetcode-cn.com/problems/zui-xiao-tiao-yue-ci-shu/
var Test = require('../Common/Test');
var http = require('http');


var minJump = function (jump) {
    const indexSet = new Set(jump.keys());
    const queue = [[0, 0]];
    indexSet.delete(0);
    while (queue.length > 0) {
        const [i, steps] = queue.shift();
        const nextIndex = i + jump[i];
        const nextSteps = steps + 1;
        if (nextIndex >= jump.length) {
            return nextSteps;
        }
        else {
            const queueLen = queue.length;
            for (const index of indexSet) {
                if (index > i) {
                    break;
                }
                else {
                    queue.push([index, nextSteps]);
                }
            }
            queue.push([nextIndex, nextSteps]);
            for (let i = queueLen; i < queue.length; i++) {
                indexSet.delete(queue[i][0]);
            }
        }
    }
    return -1;
};

function test(jump) {
    Test.test(minJump, jump);
}

// test([2, 5, 1, 1, 1, 1]);

// https://leetcode-cn.com/submissions/detail/88241815/testcase/


function testHttp() {
    // https://leetcode-cn.com/submissions/detail/88241815/testcase/
    // http.get('http://nodejs.org/dist/index.json', (res) => {
    http.get('https://leetcode-cn.com/submissions/detail/88241815/testcase/', (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
        console.log({ statusCode, contentType });
        if (statusCode !== 200) {
            // const error = new Error('请求失败\n' + `状态码: ${statusCode}`);
            console.error(`${statusCode}`);
        }
        // console.log(res);
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            console.log(rawData);
        });
    }).on('error', (e) => {
        console.error(`出现错误: ${e.message}`);
    });
}