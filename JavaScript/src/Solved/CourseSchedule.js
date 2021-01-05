// https://leetcode-cn.com/problems/course-schedule/
var Test = require('../Common/Test');

var canFinish = function (numCourses, prerequisites) {
    const graph = createGraph(numCourses, prerequisites);
    return !findCycleDFS(graph);

    function createGraph(numCourses, prerequisites) {
        const graph = Array.from({ length: numCourses }, () => []);
        for (const [start, target] of prerequisites) {
            graph[start].push(target);
        }
        return graph;
    }

    function findCycleDFS(graph) {
        const onStack = Array.from({ length: numCourses }, () => false);
        const visited = Array.from({ length: numCourses }, () => false);
        const stack = [];
        for (let i = 0; i < numCourses; i++) {
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
                        return true;
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
                    onStack[v] = false;
                    stack.pop();
                }
            }
        }
        return false;
    }
};

function test(numCourses, prerequisites) {
    Test.test(canFinish, numCourses, prerequisites);
}

test(2, [[1, 0]]);
test(2, [[1, 0], [0, 1]]);