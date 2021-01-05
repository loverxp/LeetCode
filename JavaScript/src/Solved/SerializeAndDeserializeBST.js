// https://leetcode-cn.com/problems/serialize-and-deserialize-bst/
var Test = require('../Common/Test');
var Tree = require('../Common/BinaryTree').BinaryTree;

var serialize = function (root) {
    return root.toJson();
};

var deserialize = function (data) {
    return Tree.fromJson(data);
};

function test(root) {
    root = Tree.fromArray(root);
    const data = serialize(root);
    console.log({ data });
    const tree = deserialize(data);
    console.log({ tree });
}

// test([2, 1, 3]);
test([5, 1, 4, null, null, 3, 6]);
// test([10, 5, 15, null, null, 6, 20]);