// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var serialize = function (root) {
    console.log(root);
    if (!root) return "";
    const output = [];
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node != undefined) {
            output.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        else {
            output.push(null);
        }
    }
    while (output[output.length - 1] == undefined) {
        output.pop();
    }

    return JSON.stringify(output);
};

var deserialize = function (data) {
    console.log({ data });

    if (data.length == 0) {
        return null;
    }
    const array = JSON.parse(data);
    const root = new TreeNode(array.shift());
    const queue = [root];

    for (let layer = 1; array.length > 0; layer++) {
        for (let i = 0; i < Math.pow(2, layer) / 2 && i < array.length; i++) {
            const parent = queue.shift();
            if (parent) {
                const leftVal = array.shift();
                const rightVal = array.shift();
                parent.left = leftVal != undefined ? new TreeNode(leftVal) : null;
                parent.right = rightVal != undefined ? new TreeNode(rightVal) : null;
                queue.push(parent.left);
                queue.push(parent.right);
            }
        }
    }
    return root;
};

exports.TreeNode = TreeNode;
exports.serialize = serialize;
exports.deserialize = deserialize;

function test(input) {
    const root = deserialize(input);
    console.log(root);
    console.log('\n');

    console.log(serialize(root));
}

function testSerialize(input) {
    console.log(serialize(input));
}

input1 = "[1,2,3,null,null,4,5]";
input2 = '[5,2,3,null,null,2,4,3,1]';
input3 = '[10,9,11,8,null,null,12,7,null,null,13,6,null,null,14,5,null,null,15,4,null,null,16,3,null,null,17,2,null,null,18,1,null,null,19,0]';

// test(input1);
// test(input2);
// test(input3);
// test("[]");
// test([]);
// test('[-1,0,1]');
// testSerialize([]);