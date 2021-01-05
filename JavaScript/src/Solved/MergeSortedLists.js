// https://leetcode-cn.com/problems/merge-k-sorted-lists/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function (lists) {
    for (let index = 0; index < lists.length; index++) {
        const list = lists[index];
        if (list == null) {
            lists.splice(index--, 1);
        }
    }
    if (lists.length == 0) return null;

    const root = new ListNode(0);
    let prev = root;
    while (lists.length > 1) {
        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        for (let index = 0; index < lists.length; index++) {
            const list = lists[index];
            if (list.val < min) {
                min = list.val;
                minIndex = index;
            }
        }
        prev.next = lists[minIndex];
        prev = prev.next;
        if (lists[minIndex].next == null) {
            lists.splice(minIndex, 1);
        }
        else {
            lists[minIndex] = lists[minIndex].next;
        }
    }
    prev.next = lists[0];
    return root.next;
};

function arrayToList(array) {
    let list = new ListNode(0);
    array.reduce((a, b) => {
        a.next = new ListNode(b);
        return a.next;
    }, list);
    return list.next;
}

function listToArray(list) {
    const array = [];
    while (list) {
        array.push(list.val);
        list = list.next;
    }
    return array;
}

function test1(input) {
    console.time();

    let lists = input.map(a => arrayToList(a));
    console.log(input);

    console.log("result:");
    const result = mergeKLists(lists);
    console.log(listToArray(result));

    console.timeEnd();
}

// test([[1, 4, 5], [1, 3, 4], [2, 6]]);
// test([[], []]);
test1([[], [], [], [], [], []]);
// test([[], [], [1, 2], [], [2, 3], []]);