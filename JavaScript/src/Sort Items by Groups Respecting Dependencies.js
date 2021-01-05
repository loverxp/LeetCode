// https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies/
var Test = require('./Common/Test');

var sortItems = function (n, m, group, beforeItems) {

    const result = [];
    const ungrouped = [];
    const groupDependencies = Array.from({ length: m }, () => new Set());
    for (let i = 0; i < n; i++) {
        const groupIndex = group[i];
        if (groupIndex != -1) {
            const groupDependency = groupDependencies[groupIndex];
            const beforeItem = beforeItems[i];
            for (let j = 0; j < beforeItem.length; j++) {
                // groupDependency.add(beforeItem[j]);
                groupDependency.add(group[beforeItem[j]]);
            }
        }
        else {
            if (beforeItems[i].length) {
                ungrouped.push(i);
            }
            else{
                result.push(i);
            }
        }
    }


    // return groupDependencies;
    return result;
};

function run(n, m, group, beforeItems) {
    Test.run(sortItems, n, m, group, beforeItems);
}

run(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3, 6], [], [], []]);
run(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3], [], [4], []])