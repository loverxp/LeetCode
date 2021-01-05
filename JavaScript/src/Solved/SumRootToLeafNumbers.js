function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var Tree = require('./SerializeAndDeserializeBinaryTree');

var sumNumbers = function (root) {
    return getNums(root).reduce((a, b) => a + parseInt(b), 0);

    function getNums(node) {
        if (node == null) return [];
        if (node.left == null && node.right == null) {  //leaf
            return [node.val];
        }
        else {
            const constr = s => String(node.val) + s;
            const ss1 = getNums(node.left).map(constr);
            const ss2 = getNums(node.right).map(constr);
            return [...ss1, ...ss2];
        }
    }
};

function test(root) {
    root = Tree.deserialize(JSON.stringify(root));
    console.log(root);
    console.log('\n');

    console.log(sumNumbers(root));
}


// test([1, 2, 3]);
test([4, 9, 0, 5, 1]);