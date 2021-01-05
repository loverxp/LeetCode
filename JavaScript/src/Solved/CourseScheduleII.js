// https://leetcode-cn.com/problems/course-schedule-ii/
var Test = require('../Common/Test');

var findOrder = function (numCourses, prerequisites) {
    const graph = createGraph(numCourses, prerequisites);
    return findOrderDFS(graph);

    function createGraph(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        for (const [start, target] of prerequisites) {
            graph[start].push(target);
        }
        return graph;
    }

    function findOrderDFS(graph) {
        const order = [];
        const onStack = Array.from({ length: numCourses }, () => false);
        const visited = Array.from({ length: numCourses }, () => false);
        const stack = [];
        for (let i = 0; i < numCourses; i++) {
            if (!visited[i]) {
                visited[i] = true;
                onStack[i] = true
                stack.push([i, 0]);

                while (stack.length) {
                    const [v, index] = top = stack[stack.length - 1];
                    const ws = graph[v];
                    if (index < ws.length) {
                        top[1]++;
                        const w = ws[index];
                        if (onStack[w]) {
                            return [];
                        }
                        else {
                            if (!visited[w]) {
                                onStack[w] = true;
                                visited[w] = true;
                                stack.push([w, 0]);
                            }
                        }
                    }
                    else {
                        order.push(v);
                        onStack[v] = false;
                        stack.pop();
                    }
                }
            }
        }
        return order;
    }
};

function test(numCourses, prerequisites) {
    Test.test(findOrder, numCourses, prerequisites);
}

// test(2, [[1, 0]]);
// test(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
test(2, [[0, 1]]);