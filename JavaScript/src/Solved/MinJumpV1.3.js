// https://leetcode-cn.com/problems/zui-xiao-tiao-yue-ci-shu/
var Test = require('./Common/Test');

class Node {
    constructor(val) {
        this.val = val;
    }
}

class Queue {
    constructor() {
        this.root = new Node();
        this.last = this.root;
        this.length = 0;
    }

    push(o) {
        this.last.next = new Node(o);
        this.last = this.last.next;
        this.length++;
    }

    pop() {
        if (this.last != this.root) {
            const next = this.root.next;
            const val = next.val;
            this.root.next = next.next;
            if (next == this.last) this.last = this.root;
            this.length--;
            return val;
        }
        return undefined;
    }

}

var minJump = function (jump) {
    const visited = Array(jump.length).fill(false);
    const queue = new Queue();
    queue.push([0, 0]);
    let lastIndex = 0;
    while (queue.length > 0) {
        const [i, steps] = queue.pop();
        const nextIndex = i + jump[i];
        const nextSteps = steps + 1;
        if (nextIndex >= jump.length) {
            return nextSteps;
        }
        else {
            for (let j = lastIndex + 1; j < i; j++) {
                queue.push([j, nextSteps]);
                visited[j] = true;
            }
            lastIndex = Math.max(i, lastIndex);
            if (!visited[nextIndex]) {
                queue.push([nextIndex, nextSteps]);
                visited[nextIndex] = true;
            }
        }
    }
    return -1;
};

function test(jump) {
    Test.test(minJump, jump);
}

// function testWithTestcase(params) {
//     Test.testWithTestcase()
// }
function testWithTestcase(id) {
    Test.testWithTestcase(minJump, id);
}
// test([2, 5, 1, 1, 1, 1]);       //3
// test([3, 4, 1, 1, 4, 1, 1]);    //3
// test([3, 4, 1, 1, 2, 3, 1]);    //4
// test([3, 4, 1, 1, 3, 3, 1]);    //3
// test([3, 8, 1, 1, 4, 1, 1]);    //3

// https://leetcode-cn.com/submissions/detail/88241815/testcase/

// test(Test.testcase(88241815));
testWithTestcase(88241815);
