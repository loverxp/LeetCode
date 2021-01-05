// https://leetcode-cn.com/problems/bus-routes/
var Test = require('../Common/Test');

var numBusesToDestination = function (routes, start, target) {
    if (start == target) return 0;
    routes = routes.map(a => new Set(a));

    const starts = [];
    const targets = new Set();
    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        if (route.has(start)) starts.push(i);
        if (route.has(target)) targets.add(i);
    }

    const indexSet = new Set(Array(routes.length).keys());
    const steps = Array(routes.length).fill(Infinity);

    for (const i of starts) {
        indexSet.delete(i);
        steps[i] = 1;
    }

    const queue = starts;

    while (queue.length > 0 && !targets.has(queue[0])) {
        const index = queue.shift();
        const queueLength = queue.length;
        const step = steps[index] + 1;
        const set = routes[index];
        for (const i of indexSet) {
            if (hasIntersection(set, routes[i])) {
                steps[i] = step;
                queue.push(i);
            }
        }
        for (let i = queueLength; i < queue.length; i++) {
            indexSet.delete(queue[i]);
        }
    }

    return queue.length > 0 ? steps[queue[0]] : -1;

    function hasIntersection(set1, set2) {
        for (const e of set1) {
            if (set2.has(e)) return true;
        }
        return false;
    }
};

function test(routes, start, target) {
    Test.test(numBusesToDestination, routes, start, target);
}

// test([[1, 2, 7], [3, 6, 7]], 1, 6);
test([[1, 7], [3, 5]], 5, 5);
